import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import App from "../src/App";

test("renders heading and sample image", () => {
  render(<App />);

  const headingElement = screen.getByRole("heading", {
    name: /minimal react project/i,
  });
  expect(headingElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/sample/i);
  expect(imageElement).toBeInTheDocument();
});

test("renders component examples section", () => {
  render(<App />);

  const sectionHeading = screen.getByRole("heading", {
    name: /component examples/i,
  });
  expect(sectionHeading).toBeInTheDocument();

  // Check for the Lit greeting component (rendered via shadow DOM)
  const greetingElement = document.querySelector("simple-greeting");
  expect(greetingElement).toBeInTheDocument();

  // Check for the React counter component (rendered normally)
  const counterText = screen.getByText(/react counter component/i);
  expect(counterText).toBeInTheDocument();
});
