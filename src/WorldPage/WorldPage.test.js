import React from "react";
import { render } from "@testing-library/react";
import WorldPage from "./WorldPage.jsx";

it("renders the home component correctly", () => {
  const { container } = render(<WorldPage />);
  expect(container).toMatchSnapshot();
});
