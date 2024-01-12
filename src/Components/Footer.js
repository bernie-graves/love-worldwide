import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a
              href="https://www.instagram.com/lov3worldwid3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.tiktok.com/@lov3worldwid3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
