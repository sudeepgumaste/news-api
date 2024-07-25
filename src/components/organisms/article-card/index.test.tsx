import React from "react";
import { fireEvent, render, screen, userEvent } from "../../../setup-tests/vitest-setup";
import NewsArticleCard from ".";
import PlaceholderImage from "../../../assets/images/placeholder.jpeg";
import trackUserActivity from "../../../utils/track-user-activity";


const mockArticle = {
  title: "Hello world",
  description: "This is a description",
  url: "https://example.com",
  publishedAt: new Date("2023-01-01T00:00:00.000Z").toISOString(),
  urlToImage: "https://example.com/image.jpg",
  source: { name: "Example", id: "https://example.com" },
  author: "John Doe",
  content: null,
};


vi.mock('../../../utils/track-user-activity');

describe("NewsArticleCard", () => {
  it("renders without crashing", () => {
    render(<NewsArticleCard {...mockArticle} />);
    const article = screen.getByText("Hello world");
    expect(article).toBeInTheDocument();
  });

  it("renders the title correctly", () => {
    render(<NewsArticleCard {...mockArticle} />);
    const title = screen.getByText("Hello world");
    expect(title).toBeInTheDocument();
  });

  it("renders the description correctly", () => {
    render(<NewsArticleCard {...mockArticle} />);
    const description = screen.getByText("This is a description");
    expect(description).toBeInTheDocument();
  });

  it("renders the source correctly", () => {
    render(<NewsArticleCard {...mockArticle} />);
    const source = screen.getByText("Example");
    expect(source).toBeInTheDocument();
  });

  it("renders the formatted publishedAt correctly", () => {
    render(<NewsArticleCard {...mockArticle} />);
    const publishedAt = screen.getByText("Jan 1, 2023");
    expect(publishedAt).toBeInTheDocument();
  });

  it("renders read more button if description length is greater than 80 characters", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        description={
          "Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit"
        }
      />
    );
    const readMoreButton = screen.getByText("Read More");
    expect(readMoreButton).toBeInTheDocument();
  });

  it("does not render read more button if description length is less than 80 characters", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        description="Lorem ipsum dolar sit amit"
      />
    );
    const readMoreButton = screen.queryByText("Read More");
    expect(readMoreButton).not.toBeInTheDocument();
  });

  it("does not render read more button if description is null", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        description={null}
      />
    );
    const readMoreButton = screen.queryByText("Read More");
    expect(readMoreButton).not.toBeInTheDocument();
  });

  it("renders expanded description if user clicks on read more button", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        description={
          "Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit"
        }
      />
    );
    const readMoreButton = screen.getByText("Read More");
    userEvent.click(readMoreButton);
    const expandedDescription = screen.getByText("Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit");
    expect(expandedDescription).toBeInTheDocument();
  });

  it("defaults to fallback image if urlToImage is null", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        urlToImage={null}
      />
    );
    const image = screen.getByTestId("image");
    expect(image).toHaveAttribute('src', PlaceholderImage)
  });

  it("renders with correct image if urlToImage is provided", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        urlToImage="https://example.com/image.jpg"
      />
    );
    const image = screen.getByTestId("image");
    expect(image).toHaveAttribute('src', "https://example.com/image.jpg")
  });

  it("skips rendering if it encounters a removed article", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        title="[Removed]"
      />
    );
    const image = screen.queryByTestId("image");
    expect(image).not.toBeInTheDocument();
  });

  it("renders truncated source name if it exceeds 20 characters", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        source={{ name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", id: "https://example.com" }}
      />
    );
    const source = screen.getByText("Lorem ipsum dolor si...");
    expect(source).toBeInTheDocument();
  });

  it("renders full source name if it does not exceed 20 characters", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
      />
    );
    const source = screen.getByText("Example");
    expect(source).toBeInTheDocument();
  });

  it("tracks user activity when user clicks on read more button", () => {
    render(
      <NewsArticleCard
        {...mockArticle}
        description={
          "Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit, Lorem ipsum dolar sit amit"
        }
      />
    );
    const readMoreButton = screen.getByText("Read More");
    fireEvent.click(readMoreButton);

    expect(trackUserActivity).toHaveBeenCalledOnce();
  });
});
