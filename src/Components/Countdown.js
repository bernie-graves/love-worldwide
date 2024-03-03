import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const eventDate = new Date("March 7, 2024 17:00:00 PST").getTime();
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

  const countdownStyle = (unit) => ({
    color: unit === "seconds" ? "#bf000d" : "#1d1d1d", // Changing color for seconds
  });

  return (
    <div id="countdown" data-testid="countdown" className="mx-0 fw-bold">
      <div style={countdownStyle("days")}>
        {timeLeft.days}
        <span style={{ fontSize: "1rem" }}> days</span>
      </div>
      <div style={countdownStyle("hours")}>
        {timeLeft.hours}
        <span style={{ fontSize: "1rem" }}> hours</span>
      </div>
      <div style={countdownStyle("minutes")}>
        {timeLeft.minutes}
        <span style={{ fontSize: "1rem" }}> minutes</span>
      </div>
      <div style={countdownStyle("seconds")}>
        {timeLeft.seconds}
        <span style={{ fontSize: "1rem" }}> seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
