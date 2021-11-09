import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile profilePage={props.state.profilePage}
          dispatch={props.dispatch}/>}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}
        />
      </main>
    </div>
  );
}

export default App;
