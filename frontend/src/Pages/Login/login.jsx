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
        console.log(res);
        if(res.data.userId) {
          props.login()
        }
        if(res.data.userId === "60e9e82ff1d2b1945a107d81") {
          props.admin();
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
              <label>Password</label>
              <input
                name="password"
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

            <Button className="login-btn" type="submit">Login</Button>
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
