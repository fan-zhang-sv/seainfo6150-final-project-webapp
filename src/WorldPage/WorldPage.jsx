import React from "react";
import styles from "./WorldPage.module.css";
import CountryInWorld from "./CountryInWorld/CountryInWorld";

const WorldPage = () => {
  return (
    <div className={styles.WorldContent}>
      <div className={styles.Countries}>
        <h2>World's Top News</h2>
        <CountryInWorld countryCode={"us"} />
        <CountryInWorld countryCode={"ca"} />
        <CountryInWorld countryCode={"gb"} />
        <CountryInWorld countryCode={"au"} />
        <CountryInWorld countryCode={"cn"} />
        <CountryInWorld countryCode={"jp"} />
      </div>
    </div>
  );
};

export default WorldPage;
