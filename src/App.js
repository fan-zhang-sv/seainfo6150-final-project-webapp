import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import WorldPage from "./WorldPage/WorldPage.jsx";
import Error from "./ErrorPage/ErrorPage.jsx";
import Header from "./Modules/Header/Header.jsx";
import SingleNewsPage from "./SingleNewsPage/SingleNewsPage.jsx";
import { ccToCountryName } from "./Modules/countryCodes.jsx";
import CountryPage from "./CountryPage/CountryPage.jsx";
import Footer from "./Modules/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Switch>
        <Route path="/" exact component={WorldPage} />
        <Route
          path="/country/:cc"
          exact
          render={({ match }) => {
            if (match.params.cc in ccToCountryName) {
              return <CountryPage countryCode={match.params.cc} />;
            } else {
              return <Error />;
            }
          }}
        />
        <Route
          path="/news/:data"
          exact
          render={({ match }) => <SingleNewsPage data={match.params.data} />}
        />
        <Route component={Error} />
      </Switch>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
