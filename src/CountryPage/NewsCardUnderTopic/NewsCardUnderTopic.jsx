import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NewsCardUnderTopic.module.css";

const NewsCardUnderTopic = (props) => {
  var data = {
    name: props.news["name"],
    provider: props.news["provider"][0]["name"],
    url: props.news["url"],
    imgUrl:
      props.news["image"] && props.news["image"]["contentUrl"]
        ? props.news["image"]["contentUrl"]
        : "",
    description: props.news["description"],
  };
  data = JSON.stringify(data);
  data = data.toString().replace(/%/g, "~~pct~~");
  data = encodeURIComponent(data);
  var path = `/news/${data}`;

  return (
    <Link to={path} className={styles.NewsCard}>
      {props.news["image"] ? (
        <img
          className={styles.Image}
          src={props.news["image"]["thumbnail"]["contentUrl"]}
          alt={props.title}
        ></img>
      ) : null}
      <h4>{props.news["name"]}</h4>
    </Link>
  );
};

NewsCardUnderTopic.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCardUnderTopic;
