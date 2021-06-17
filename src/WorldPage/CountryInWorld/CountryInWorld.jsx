import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CountryInWorld.module.css";

import { ccToCountryName, ccToMkt } from "../../Modules/countryCodes";
import NewsCard from "../NewsCard/NewsCard";

const baseUrl = "https://api.bing.microsoft.com/v7.0/news?";

const CountryInWorld = (props) => {
  const countryName = ccToCountryName[props.countryCode];
  const mkt = ccToMkt[props.countryCode];
  const [fetchedData, setFetchedData] = useState([]);

  const params = {
    mkt: mkt,
    count: 10,
    originalImg: true,
  };
  const urlParams = new URLSearchParams(Object.entries(params));

  useEffect(() => {
    if (props.countryCode in ccToCountryName && fetchedData.length === 0) {
      console.log("fetching data from api");
      fetch(baseUrl + urlParams, {
        headers: {
          "content-type": "application/json",
          "Ocp-Apim-Subscription-Key": "f23336450eff41789eae442a8e728341",
        },
      })
        .then((response) => response.json())
        .then((data) => setFetchedData(data["value"]))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetchedData, props.countryCode, urlParams]);

  return fetchedData.length === 0 ? null : (
    <div className={styles.CountriesContent}>
      <Link
        to={"/country/$countryCode".replace("$countryCode", props.countryCode)}
      >
        <h3>{countryName}</h3>
      </Link>
      <div className={styles.CountryNews}>
        {fetchedData.map((news) => (
          <NewsCard news={news} key={news["url"]} />
        ))}
      </div>
    </div>
  );
};

CountryInWorld.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

export default CountryInWorld;
