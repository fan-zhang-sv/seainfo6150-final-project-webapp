import React from "react";
import SingleNewsPage from "./SingleNewsPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const news = {
  name: "FDA authorizes 1st COVID-19 vaccine in United States ",
  url:
    "https://www.msn.com/en-us/health/medical/fda-authorizes-1st-covid-19-vaccine-in-united-states/ar-BB1bRB1S",
  image: {
    thumbnail: {
      contentUrl:
        "https://www.bing.com/th?id=OVFT.-pPAb7rjkmMssGiyXjXE0S&pid=News",
      width: 1200,
      height: 630,
    },
    isLicensed: true,
  },
  description:
    "The Food and Drug Administration authorized the United States' first COVID-19 vaccine for people age 16 and over late Friday, a historic moment in a pandemic that has killed over 290,000 in this",
  provider: [
    {
      _type: "Organization",
      name: "ABC News",
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=AR_0cfcddaa71cae000b74e3bf52bc84d78",
        },
      },
    },
  ],
  datePublished: "2020-12-12T04:29:00.0000000Z",
};

describe("SingleNewsPage tests", () => {
  var data = {
    name: news["name"],
    provider: news["provider"][0]["name"],
    url: news["url"],
    imgUrl:
      news["image"] && news["image"]["contentUrl"]
        ? news["image"]["contentUrl"]
        : "",
    description: news["description"],
  };
  data = JSON.stringify(data);
  data = data.toString().replace(/%/g, "~~pct~~");
  data = encodeURIComponent(data);
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <SingleNewsPage data={data} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
