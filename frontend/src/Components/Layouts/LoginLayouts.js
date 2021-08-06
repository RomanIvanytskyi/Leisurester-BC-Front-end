import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import paths from "../../router/paths";

const LoginLayout = ({ children, login, signUp }) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand as={Link} to={paths.home}>
          Eventier
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basics-navbar-nav" />
        <Navbar.Collapse id="basics-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};

export default LoginLayout;
