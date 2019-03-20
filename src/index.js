import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";


var currentCategory ="tires";

const changeCategory = category => {
  currentCategory = category;
  render();
};

function render() {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById("root")
  );
}
render();
