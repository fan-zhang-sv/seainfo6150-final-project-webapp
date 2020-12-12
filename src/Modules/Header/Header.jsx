import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Solid News</h1>
      <div className={styles.TopNav}>
        <Link to={"/"}>World</Link>
        <Link to={"/country/us"}>US</Link>
        <Link to={"/country/ca"}>Canada</Link>
        <Link to={"/country/gb"}>UK</Link>
        <Link to={"/country/au"}>Australia</Link>
        <Link to={"/country/cn"}>China</Link>
        <Link to={"/country/jp"}>Japan</Link>
        <Link to={"/country/404"}>404</Link>
      </div>
    </div>
  );
};

export default Header;
