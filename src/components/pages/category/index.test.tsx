import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import { Route, Routes } from "react-router-dom";

const WrappedCategoryPage = () => (
  <Routes>
    <Route path="/category/:category" element={<CategoryPage />} />
  </Routes>
);


import CategoryPage from ".";

describe("CategoryPage", () => {
  it("renders without crashing and with correct category title", () => {
    render(<WrappedCategoryPage />, {route: "/category/business"});
    const category = screen.getAllByText("Business");
    expect(category).toHaveLength(2);
  });
});