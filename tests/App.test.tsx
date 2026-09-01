import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import App from "../src/App";
import { RootLayout } from "../src/layouts";
import { About, Home } from "../src/pages";

function renderWithRouter(initialPath = "/") {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
        ],
      },
    ],
    { initialEntries: [initialPath] }
  );
  return render(<RouterProvider router={router} />);
}

test("renders heading and sample image", () => {
  renderWithRouter();

  const headingElement = screen.getByRole("heading", {
    name: /minimal react project/i,
  });
  expect(headingElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/sample/i);
  expect(imageElement).toBeInTheDocument();
});

test("renders component examples section", () => {
  renderWithRouter();

  const sectionHeading = screen.getByRole("heading", {
    name: /component examples/i,
  });
  expect(sectionHeading).toBeInTheDocument();

  const greetingElement = document.querySelector("simple-greeting");
  expect(greetingElement).toBeInTheDocument();

  const counterText = screen.getByText(/react counter component/i);
  expect(counterText).toBeInTheDocument();
});

test("renders navigation links", () => {
  renderWithRouter();

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
});

test("updates and resets the React counter", () => {
  renderWithRouter();

  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  const resetButton = screen.getByRole("button", { name: /reset/i });
  const incrementButton = screen.getByRole("button", { name: /increment/i });

  fireEvent.click(incrementButton);
  expect(screen.getByText("1", { selector: "strong" })).toBeInTheDocument();

  fireEvent.click(decrementButton);
  expect(screen.getByText("0", { selector: "strong" })).toBeInTheDocument();

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(screen.getByText("0", { selector: "strong" })).toBeInTheDocument();
});

test("renders the about route", () => {
  renderWithRouter("/about");

  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
});

test("renders the application router", () => {
  window.history.pushState({}, "", "/");
  render(<App />);

  expect(screen.getByRole("heading", { name: /minimal react project/i })).toBeInTheDocument();
});
