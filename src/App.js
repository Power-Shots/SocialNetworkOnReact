import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
          render={() => <Profile/>}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer/>}
        />

        <Redirect from='**' to="/profile"/>
      </main>
    </div>
  );
}

export default App;
