import React from "react";
import ErrorPage from "./ErrorPage";
import { render } from "@testing-library/react";

describe("ErrorPage tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
