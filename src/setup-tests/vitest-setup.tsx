import React from "react";
import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup, render, RenderOptions } from "@testing-library/react";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const queryClient = new QueryClient();

type CustomRenderOptions = {
  route?: string;
} & Omit<RenderOptions, "wrapper">;

const customRender = (
  ui: React.ReactElement,
  options?: CustomRenderOptions
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter
          initialEntries={options?.route ? [options?.route] : undefined}
        >
          {children}
        </MemoryRouter>
      </QueryClientProvider>
    ),
    ...options,
  });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render method
export { customRender as render };
