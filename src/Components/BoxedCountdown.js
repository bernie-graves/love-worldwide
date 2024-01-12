import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const BoxedCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const eventDate = new Date("March 7, 2024 15:00:00 PST").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "transparent" }}
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Card
            className="mx-2 text-center"
            style={{ width: "6rem" }}
            key={unit}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "2.5rem" }}>{value}</Card.Title>
            </Card.Body>
          </Card>
          <small>{unit.toUpperCase()}</small>
        </div>
      ))}
    </div>
  );
};

export default BoxedCountdown;
