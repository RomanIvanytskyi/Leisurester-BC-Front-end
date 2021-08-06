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
  
  const AdminLayout = ({ children, logout }) => {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={paths.home}>
              Eventier<small className={classes.admintext} >|admin</small>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={paths.profile}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to={paths.adminglossary}>
                Library
              </Nav.Link>
              <Nav.Link as={Link} to={paths.newLeisure}>
                New Leisure
              </Nav.Link>
              <Nav.Link as={Link} to={paths.adminproposition}>
               Propositions
              </Nav.Link>

            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
              <Button onClick={logout} >Logout</Button>
            </Form>
          </Container>
        </Navbar>
        <Container>{children}</Container>
      </div>
    );
  };
  export default AdminLayout;
  