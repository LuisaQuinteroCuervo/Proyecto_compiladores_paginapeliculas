
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logito.png';
import "../styles/navbar.css";

const MyNavbar = () => {
    return (
        <Navbar  variant="dark" expand="lg" className="custom-navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo} 
                alt="Logo"
                width="200"
                height="60"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">Bienvenidos!</Nav.Link>
              <Nav.Link as={Link} to="/peliculas/crear" className="nav-link-custom">Agregar Película</Nav.Link>
                <Nav.Link as={Link} to="/" className="nav-link-custom">Inicio</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default MyNavbar;