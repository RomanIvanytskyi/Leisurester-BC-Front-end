import { NavLink, Row, Col, Form } from "react-bootstrap";
import paths from "../../router/paths";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { register } from "../../api/api";
import { Button } from "reactstrap";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      login: "",
      email: "",
    },
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} >
      <Row className="mt-5">
        <Col
          lg={{ span: 6, offset: 3 }}
          md={{ span: 8, offset: 2 }}
          sm={{ span: 12 }}
        >
            <h3>Register</h3>
            <div>
              <div className="form-group">
                <label>First name</label>
                <input
                  name="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  name="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="form-group">
                <label>Login</label>
                <input
                  name="login"
                  onChange={formik.handleChange}
                  value={formik.values.login}
                  type="text"
                  className="form-control"
                  placeholder="Enter login"
                />
              </div>

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

              <Button type="submit">Submit</Button>
              <p className="forgot-password text-right">
                Already registered{" "}
                <NavLink as={Link} to={paths.login}>
                  log in?
                </NavLink>
              </p>
            </div>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
