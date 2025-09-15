"use client";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function PortfolioNavbar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/">Portfolio - DiazG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ms-auto d-flex gap-4">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/about">About</Nav.Link>
  <Nav.Link href="/projects">Projects</Nav.Link>
  <Nav.Link href="/contact">Contact</Nav.Link>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
