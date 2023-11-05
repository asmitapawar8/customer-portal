import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Logo.jpg';

function Header() {
  return (
    // <>
    //   <meta charSet="UTF-8" />
    //   <meta name="apple-mob

      <Navbar bg="light" expand="md">
      <Navbar.Brand href="https://www.portal.poornata.com/Pages/Home.aspx" target="_blank">
        <img src={logo} alt="SeamEx logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
<Nav.Link as={Link} to="/media" className="nav-link">Media</Nav.Link>
<NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/servicesWWD" className="nav-link">What we do?</NavDropdown.Item>
            <NavDropdown.Item href="#" className="nav-link">Why we do?</NavDropdown.Item>
            <NavDropdown.Item href="#" className="nav-link">How we do?</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/services" className="nav-link">Services we offer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
