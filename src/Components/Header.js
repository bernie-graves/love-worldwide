import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar mb-3 fw-bold"
        fixed="top"
        style={{
          background: "#fffefee6",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            lov3 fest
          </Navbar.Brand>
          <Navbar.Text>| 03.07.2024</Navbar.Text>
          <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
            className="fw-bold"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel">
                lov3 fest
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={HashLink} to="/#home" onClick={handleClose}>
                  home
                </Nav.Link>
                <Nav.Link as={HashLink} to="/#about" onClick={handleClose}>
                  about
                </Nav.Link>
                <Nav.Link
                  href="https://www.eventbrite.com/e/lov3-fest-tickets-791331091597?aff=oddtdtcreator"
                  onClick={handleClose}
                >
                  buy tickets
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
