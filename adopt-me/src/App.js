import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import DetailsWithBoundary from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <DetailsWithBoundary path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
