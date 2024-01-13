import React from "react";
import Countdown from "./Countdown"; // Make sure this points to the correct file path
import RotatedBuyButton from "./RotatedBuyButton";

const MainContent = () => {
  return (
    <div className="main-content d-flex flex-column justify-content-center align-items-center vh-100 my-2">
      <div>
        <h2 className="mb-0 fw-bold" style={{ letterSpacing: "-0.5px" }}>
          lov3 fest
        </h2>
        <h6 className="fw-bold">a film festival for the nobodies</h6>
        <Countdown />
        {/* <RotatedBuyButton /> */}
      </div>
    </div>
  );
};

export default MainContent;
