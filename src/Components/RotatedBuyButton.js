import React from "react";
import Button from "react-bootstrap/Button";
import "../Styles/rotated-button.css";

const RotatedBuyButton = () => {
  const handleClick = () => {
    window.open(
      "https://www.eventbrite.com/e/lov3-fest-tickets-791331091597?aff=oddtdtcreator",
      "_blank"
    );
  };

  return (
    <Button
      variant="link"
      className=" fw-bold text-button rotated-button"
      onClick={handleClick}
      id="rotated-buy-button"
      data-testid="rotated-buy-button"
    >
      buy tickets
    </Button>
  );
};

export default RotatedBuyButton;
