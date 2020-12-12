import React from "react";
import CountryPage from "./CountryPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("CountryPage tests", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryPage countryCode={"us"} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
