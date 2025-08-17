import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-[#0d1117] navbar-dark"
        style={{ backgroundColor: "#0d1117" }}
      >
        <Container>
          <Navbar.Brand href="/" className="text-white fw-bold">
            CodeMentor 🌉
          </Navbar.Brand>

          {/* Toggle button for small devices */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Nav items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-5">
              <Nav.Link href="#about" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#courses" className="text-white">
                Courses
              </Nav.Link>
              <Nav.Link href="#method" className="text-white">
                Method
              </Nav.Link>
              <Nav.Link href="#footer" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
