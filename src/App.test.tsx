import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders heading and sample image", () => {
  render(<App />);

  const headingElement = screen.getByRole("heading", {
    name: /minimal react project/i,
  });
  expect(headingElement).toBeInTheDocument();

  const imageElement = screen.getByAltText(/sample/i);
  expect(imageElement).toBeInTheDocument();
});
