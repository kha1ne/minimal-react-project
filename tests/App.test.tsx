import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import { RootLayout } from "../src/layouts";
import { Home } from "../src/pages";

function renderWithRouter(initialPath = "/") {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> }],
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
