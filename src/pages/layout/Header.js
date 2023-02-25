import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { setSideBarShow } from "../../system/systemSlice";
import { useDispatch, useSelector } from "react-redux";
export const Header = () => {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.adminInfo);

  return (
    <Navbar bg="" expand="md" className="navbg">
      <Container>
        <div>
          {admin?._id && (
            <Button
              variant="none"
              onClick={() => dispatch(setSideBarShow(true))}
            >
              <i class="fa-solid fa-bars"></i>
            </Button>
          )}

          <Link to="/" className="navbar-brand text-light fw-bold">
            Admin CMS
          </Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {admin?._id ? (
              <>
                <Link className="nav-link" to="/register">
                  <i className="fa-solid fa-bell text-light" title="Notification"></i>
                </Link>

                <Link className="nav-link" to="/">
                  <i
                    className="fa-solid fa-right-to-bracket text-light"
                    title="Logout"
                  ></i>
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  <i className="fa-solid fa-right-to-bracket text-light"></i> 
                </Link>
                <Link className="nav-link" to="/register">
                  <i className="fa-solid fa-pen-to-square text-light"></i> 
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
