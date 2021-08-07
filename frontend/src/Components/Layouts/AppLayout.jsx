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
import classes from "./AdminLayout.module.css"

const AppLayout = ({ children, logout }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className={classes.NavLinks} as={Link} to={paths.home}  >
            Eventier
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className={classes.NavLinks} as={Link} to={paths.profile}  >
              Profile
            </Nav.Link>
            <Nav.Link className={classes.NavLinks} as={Link} to={paths.glossary}  >
              Library
            </Nav.Link>
            <Nav.Link  className={classes.NavLinks} as={Link} to={paths.proposition} >
              NewProposition
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
export default AppLayout;
