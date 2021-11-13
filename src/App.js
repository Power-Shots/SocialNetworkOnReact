import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
          render={() => <Profile store={props.store}/>}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store}/>}
        />
      </main>
    </div>
  );
}

export default App;
