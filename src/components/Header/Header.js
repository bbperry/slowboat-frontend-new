import React from 'react';
import { useNavigate } from 'react-router-dom'

import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import banner from './images/banner.jpg';

function Header({currentUser, setCurrentUser}) {
    const loggedin = `Logged in as ${currentUser.username}`;
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("token")
        navigate('/login');
        setCurrentUser({})
    }   

  return (
    <>
      <LinkContainer to="/">
        <img className="banner" src={banner} alt="slowboat banner" />
      </LinkContainer>

      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar m-auto">
              <LinkContainer className="nav-links px-9" to="/about">
                <Nav.Link className="links">Our Story</Nav.Link>
              </LinkContainer>

              <LinkContainer className="nav-links" to="/events">
                <Nav.Link className="links">Events</Nav.Link>
              </LinkContainer>

              <LinkContainer className="nav-links" to="/store">
                <Nav.Link className="links">Shop</Nav.Link>
              </LinkContainer>

              <LinkContainer className="nav-links" to="/cart">
                <Nav.Link className="links">Cart</Nav.Link>
              </LinkContainer>

              {!currentUser.username ? (
                <LinkContainer to="/login">
                  <Nav.Link className="links">Login</Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown title={loggedin} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={()=>{handleLogout()}}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
