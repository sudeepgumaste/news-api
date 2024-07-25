import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import { Route, Routes } from "react-router-dom";
import Container from ".";

describe("Container", () => {
  it("renders without crashing", () => {
    render(
      <Container />
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  it("renders elements through the outlet correctly and renders without crashing", () => {
    render(
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<div>Hello world</div>} />
        </Route>
      </Routes>
    );
    const text = screen.getByText("Hello world");
    expect(text).toBeInTheDocument();
  });
});
