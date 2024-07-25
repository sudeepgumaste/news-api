import React from "react";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup, render, RenderOptions } from "@testing-library/react";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const queryClient = new QueryClient();

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
    ...options,
  });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render method
export { customRender as render };
