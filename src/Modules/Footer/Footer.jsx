import React, { useState } from "react";
import styles from "./Footer.module.css";
import { ccToCountryName } from "../../Modules/countryCodes";

const Footer = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
    console.log(data.get("selectedCategory"));
  }

  return (
    <div className={styles.Footer}>
      <div className={styles.FormContent}>
        <h2>Subscribe</h2>
        {submittedForm ? (
          <div>
            <h5>
              {submittedForm.get("title")} {submittedForm.get("name")}, you have
              successfully subscribed categoriy{" "}
              {submittedForm.get("selectedCategory")} from{" "}
              {ccToCountryName[submittedForm.get("country")]}.
            </h5>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div>
              <h5>Please tell us your information.</h5>
              <label htmlFor="titleID">Title</label>
              <select name="title" id="titleID">
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Mx">Mx</option>
              </select>
              <label htmlFor="nameID">Name</label>
              <input type="text" name="name" required id="nameID" />
              <div className={styles.BreakLine} />
              <label htmlFor="emailID">Email</label>
              <input type="email" name="email" required id="emailID" />
            </div>

            <div>
              <h5>Please customize subscription.</h5>
              <label htmlFor="countryID">Country</label>
              <select name="country" id="countryID">
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="cn">China</option>
                <option value="jp">Japan</option>
              </select>
              <div className={styles.BreakLine} />
              <label>
                <input type="radio" name="selectedCategory" value="Local" />
                Local
              </label>
              <label>
                <input type="radio" name="selectedCategory" value="Business" />
                Business
              </label>
              <label>
                <input
                  type="radio"
                  name="selectedCategory"
                  value="Entertainment"
                />
                Entertainment
              </label>
              <label>
                <input
                  type="radio"
                  name="selectedCategory"
                  value="Politics/Society"
                />
                Politics/Society
              </label>
              <label>
                <input type="radio" name="selectedCategory" value="Sports" />
                Sports
              </label>
              <label>
                <input type="radio" name="selectedCategory" value="World" />
                World
              </label>
            </div>
            <input
              className={styles.SubmitButton}
              type="submit"
              value="Submit"
            />
          </form>
        )}
      </div>
      <h6>
        <span>&copy; Fan "Felix" Zhang 2020</span>
      </h6>
    </div>
  );
};

export default Footer;
