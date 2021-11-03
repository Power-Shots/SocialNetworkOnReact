import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/state";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;