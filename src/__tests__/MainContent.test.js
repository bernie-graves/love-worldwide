import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainContent from "../Components/MainContent";
import Countdown from "../Components/Countdown";
import RotatedBuyButton from "../Components/RotatedBuyButton";


describe("MainContent", () => {
  // Test 1: MainContent renders correctly
  test("renders MainContent component", () => {
    render(<MainContent />);
    expect(screen.getByText(/lov3 fest/i)).toBeInTheDocument();
    expect(
      screen.getByText(/a film festival for the nobodies/i)
    ).toBeInTheDocument();
  });

  // Test 2: Renders Countdown component
  test("renders Countdown component", () => {
    render(<MainContent />);
    expect(screen.getByTestId("countdown")).toBeInTheDocument();
  });

  // Test 3: Renders RotatedBuyButton component
  test("renders RotatedBuyButton component", () => {
    render(<MainContent />);
    expect(screen.getByTestId("rotated-buy-button")).toBeInTheDocument();
  });
});
