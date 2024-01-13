import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../Components/About";

describe("About Component", () => {
  // Test 1: Renders the main heading
  test("renders the main heading", () => {
    render(<About />);
    expect(screen.getByText(/about lov3 fest/i)).toBeInTheDocument();
  });

  // Test 2: Renders the date and location
  test("renders the date and location", () => {
    render(<About />);
    expect(screen.getByText(/date: march 7, 2024 at 3pm/i)).toBeInTheDocument();
    expect(
      screen.getByText(/location: The CAW, 631 Garden St, Santa Barbara/i)
    ).toBeInTheDocument();
  });

  // Test 3: Renders the 'the collective' section
  test("renders the collective section", () => {
    render(<About />);
    expect(screen.getByText(/the collective/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /At LOV3 Worldwide, our mission is to create a dynamic space/i
      )
    ).toBeInTheDocument();
  });

  // Test 4: Renders the 'the festival' section
  test("renders the festival section", () => {
    render(<About />);
    expect(screen.getByText(/the festival/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our launch event, LOV3 Fest, epitomizes our commitment/i
      )
    ).toBeInTheDocument();
  });
});
