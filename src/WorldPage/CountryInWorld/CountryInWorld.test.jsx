import React from "react";
import CountryInWorld from "./CountryInWorld";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("CountryInWorld tests", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryInWorld countryCode={"us"} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
