import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import ThreeColumnLayout from ".";

describe("ThreeColumnLayout", () => {
  it("renders three columns without crashing", () => {
    render(<ThreeColumnLayout left={<div>Left</div>} right={<div>Right</div>} center={<div>Center</div>} />);
    const leftAside = screen.getByTestId("left-section");
    expect(leftAside).toBeInTheDocument();
    const rightAside = screen.getByTestId("right-section");
    expect(rightAside).toBeInTheDocument();
    const center = screen.getByTestId("center-section");
    expect(center).toBeInTheDocument();
  });

  it("renders its children correctly", () => {
    render(<ThreeColumnLayout left={<div>Left</div>} right={<div>Right</div>} center={<div>Center</div>} />);
    const leftAside = screen.getByText("Left");
    expect(leftAside).toBeInTheDocument();
    const rightAside = screen.getByText("Right");
    expect(rightAside).toBeInTheDocument();
    const center = screen.getByText("Center");
    expect(center).toBeInTheDocument();
  });
});