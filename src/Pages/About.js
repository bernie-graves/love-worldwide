import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/about-section.css";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="mb-3">about lov3 fest</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <p className="mb-1">date: march 7, 2024 at 3pm</p>
          <p>location: The CAW, 631 Garden St, Santa Barbara</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <h4>the collective</h4>
          <p>
            At LOV3 Worldwide, our mission is to create a dynamic space for
            emerging artists, fostering creativity that defies the mainstream
            currents of pop culture. We are dedicated to providing a platform
            where unconventional voices can flourish, transcending boundaries
            and challenging norms.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h4>the festival</h4>
          <p>
            Our launch event, LOV3 Fest, epitomizes our commitment to this
            mission. It is not just an event; it is a celebration of artistic
            diversity and expression. Through film screenings, live music, and
            local food vendors, we aim to create an immersive experience that
            resonates with those seeking something beyond the ordinary. <br />
            <br />
            LOV3 Fest is more than a festival; it’s a testament to our belief in
            the power of unbridled creativity.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
