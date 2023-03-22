import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarHead = () => {
  return (
    <Navbar
      className="justify-content-center bg-transparent"
      expand="lg"
      style={{
        backgroundImage: `url("../../image/Background1.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "60px",
      }}
    >
      <Container>
        <Nav className="justify-content-around flex-grow-1">
          <Nav.Link>
            <Link to="/" className="text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#sucessStories" className="text-white">
            Success Stories
          </Nav.Link>
          <Nav.Link href="#membership" className="text-white">
            Membership
          </Nav.Link>
          <Nav.Link href="#gallery" className="text-white">
            Gallery
          </Nav.Link>
          <Nav.Link>
            <Link to="/faqs" className="text-white">
              FAQS
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/aboutus" className="text-white">
              Aboutus
            </Link>
          </Nav.Link>
          <Nav.Link href="#contactFooter" className="text-white">
            Contact
          </Nav.Link>
          <Nav.Link
            className="p-2 rounded bg-white"
            style={{ color: "#FA4C55" }}
          >
            <Link to="/login">Login/Register</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarHead;
