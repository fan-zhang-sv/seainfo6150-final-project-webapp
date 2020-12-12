import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleNewsPage.module.css";

const SingleNewsPage = (props) => {
  //   var data = decodeURIComponent(escape(window.atob(props.data)));
  var data = decodeURIComponent(props.data);
  data = data.toString().replace(/~~pct~~/g, "%");
  data = JSON.parse(data);
  var { name, provider, url, imgUrl, description } = data;

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1>{name}</h1>
        <h2>{provider}</h2>
        {imgUrl !== "" ? (
          <img
            className={styles.Image}
            src={imgUrl}
            alt={name}
            referrerPolicy="no-referrer"
          />
        ) : null}
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read On Orginal Page
        </a>
      </div>
    </div>
  );
};

SingleNewsPage.propTypes = {
  data: PropTypes.string.isRequired,
};

export default SingleNewsPage;
