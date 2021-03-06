import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
      <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand href="#home" className="fw-bold text-warning">ViLIA Properties</Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end fw-bold">
       <Nav.Link  as={Link} to="/home" className="text-info">Home</Nav.Link>
       <Nav.Link  as={Link} to="/appartments"className="text-info">Appartments</Nav.Link>
       <Nav.Link  as={Link} to="/features" className="text-info">Features</Nav.Link>
       <Nav.Link  as={Link} to="/about" className="text-info">About Us</Nav.Link>
       <Nav.Link as={Link} to="/login" className="text-white">Sign In</Nav.Link>
      
       </Navbar.Collapse>
       </Container>
       </Navbar>
      </>
    );
};

export default Header;