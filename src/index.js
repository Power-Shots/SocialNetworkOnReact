import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/reduxStore";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};


rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})


