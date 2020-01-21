import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    [
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havenese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cocktielid"
      }),
      React.createElement(Pet, { name: "Donik", animal: "Cat", breed: "Mixed" })
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
