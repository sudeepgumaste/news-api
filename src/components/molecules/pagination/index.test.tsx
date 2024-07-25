import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import Pagination from ".";

describe("Pagination", () => {
  it("renders without crashing", () => {
    render(<Pagination totalPages={10} currentPage={1} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  it("renders a ... when there are more pages than the page range", () => {
    render(<Pagination totalPages={10} currentPage={1} />);
    const ellipses = screen.getByText("...");
    expect(ellipses).toBeInTheDocument();
  });

  it("renders links with the right hrefs", () => {
    render(<Pagination totalPages={10} currentPage={1} />);
    const firstLink = screen.getByText("1");
    expect(firstLink).toHaveAttribute("href", "/?page=1");
    const secondLink = screen.getByText("2");
    expect(secondLink).toHaveAttribute("href", "/?page=2");
  });
});