import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Link to="/" className="navbar-brand text-light">
          Admin CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className="nav-link" to="/">
              <i className="fa fa-sign-in text-light"></i>
            </Link>
            <Link className="nav-link" to="/register">
              <i className="fa-solid fa-user-pen text-light"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
