import {
  Container,
  Nav,
  Navbar,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../../router/paths";
import classes from "./AdminLayout.module.css";

const AdminLayout = ({ children, logout }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={paths.home}>
            Leisurester<small className={classes.admintext}>|admin</small>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={paths.profile} className={classes.NavLinks}>
              <p className={classes.NavLinks}> Profile</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.adminglossary}>
              <p className={classes.NavLinks}>Library</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.newLeisure}>
              <p className={classes.NavLinks}> NewLeisure</p>
            </Nav.Link>
            <Nav.Link as={Link} to={paths.adminproposition}>
              <p className={classes.NavLinks}> Propositions</p>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            <Button onClick={logout}>Logout</Button>
          </Form>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};
export default AdminLayout;
