import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import SearchPage from ".";

describe("SearchPage", () => {
  it("renders without crashing", () => {
    render(<SearchPage />, { route: "/search?q=bitcoin&page=1" });
    const title = screen.getByText("Your results for: bitcoin");
    expect(title).toBeInTheDocument();
  });

  it("renders loading state when articles are still loading", () => {
    render(<SearchPage />, { route: "/search?q=bitcoin&page=1" });
    const loadingState = screen.getAllByTestId("skeleton-loader-article-card");
    expect(loadingState).toHaveLength(9);
  });
});
