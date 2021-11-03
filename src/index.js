import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import state, { addPost } from "./redux/state";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} />
  </BrowserRouter>,
  document.getElementById("root")
);
