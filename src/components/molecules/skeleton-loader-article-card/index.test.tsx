import React from "react";
import { render, screen } from "../../../setup-tests/vitest-setup";
import SkeletonLoaderArticleCard from ".";

describe("SkeletonLoaderArticleCard", () => {
  it("renders without crashing", () => {
    render(<SkeletonLoaderArticleCard />);
    const skeletonLoaderArticleCard = screen.getByTestId("skeleton-loader-article-card");
    expect(skeletonLoaderArticleCard).toBeInTheDocument();
  });
});