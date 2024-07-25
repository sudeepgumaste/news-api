import React from "react";
import { render, screen, userEvent } from "../../../setup-tests/vitest-setup";
import categories from "../../../constants/categories";

import * as reactRouterDom from 'react-router-dom';

import HomePage from ".";

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
    const title = screen.getByText("What captivates your curiosity today?");
    expect(title).toBeInTheDocument();
  });

  it("renders the correct number of cards", () => {
    render(<HomePage />);
    const cards = screen.getAllByTestId("category-card");
    expect(cards).toHaveLength(categories.length);
  });

  it("updates the state of input box when user types", async() => {
    render(<HomePage />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "test");
    expect(input.value).toBe("test");
  });

  it("redirects to the search page when the user clicks on a card", async() => {
    const mockNavigate = vi.fn();

    vi.spyOn(reactRouterDom, 'useNavigate').mockImplementation(() => mockNavigate);

    render(<HomePage />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    await userEvent.type(input, "bitcoin");
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    
    expect(mockNavigate).toHaveBeenCalledWith("/search?q=bitcoin&page=1");
  });

  it("shouldn't redirect to search page when user submits an empty search query", async() => {
    const mockNavigate = vi.fn();

    vi.spyOn(reactRouterDom, 'useNavigate').mockImplementation(() => mockNavigate);

    render(<HomePage />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});