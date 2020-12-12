import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CountryPage.module.css";
import cx from "classnames";
import NewsCardUnderTopic from "./NewsCardUnderTopic/NewsCardUnderTopic";

import {
  ccToCountryName,
  ccToMkt,
  ccToCategory,
} from "../Modules/countryCodes";

const baseUrl =
  "https://my-news-app.cognitiveservices.azure.com/bing/v7.0/news?";

const CountryPage = (props) => {
  const cc = props.countryCode;
  const countryName = ccToCountryName[cc];
  const mkt = ccToMkt[cc];
  const categories = ccToCategory[cc];
  let [selectedCategory, setSelectedCategory] = useState(0);
  let [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    if (props.countryCode in ccToCountryName) {
      const params = {
        mkt: mkt,
        category: categories[selectedCategory],
        originalImg: true,
      };
      const urlParams = new URLSearchParams(Object.entries(params));

      console.log("fetching data from api");
      fetch(baseUrl + urlParams, {
        headers: {
          "content-type": "application/json",
          "Ocp-Apim-Subscription-Key": "9e6eb09fc72b40d1abf23d1e5ca46a11",
        },
      })
        .then((response) => response.json())
        .then((data) => setFetchedData(data["value"]));
    }
  }, [categories, mkt, props.countryCode, selectedCategory]);

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <h1>{countryName + " - " + categories[selectedCategory]}</h1>
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.CategoryContainer}>
          {categories.map((category, idx) => {
            return (
              <button
                className={cx(
                  styles.CategoryButton,
                  selectedCategory === idx
                    ? styles.SelectedButton
                    : styles.PlainButton
                )}
                key={category}
                onClick={() => {
                  setSelectedCategory(idx);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className={styles.NewsContainer}>
          {fetchedData
            ? fetchedData.map((news) => (
                <NewsCardUnderTopic news={news} key={news["url"]} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

CountryPage.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

export default CountryPage;
