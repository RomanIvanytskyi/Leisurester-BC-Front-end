import { NavLink, Row, Col } from "react-bootstrap";
import paths from "../../router/paths";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../../api/api";
import { Button } from "reactstrap";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      login(values).then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token, "role", res.data.role);
        localStorage.setItem("role", res.data.role);
        if (res.data.token) {
          props.login();
          console.log("done");
        }
        if (res.data.role === "admin") {
          console.log(res.data.role);
          props.login();
        }
      });
    },
  });

  return (
    <Row className="mt-5">
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        <form onSubmit={formik.handleSubmit}>
          <h3>Log in</h3>
          <div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Passwword</label>
              <input
                name="passord"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <Button className="login-btn" type="submit">
              Login
            </Button>
            <p className="forgot-password text-right">
              <NavLink as={Link} to={paths.register}>
                Not registred?
              </NavLink>
            </p>
          </div>
        </form>
      </Col>
    </Row>
  );
};
export default Login;
