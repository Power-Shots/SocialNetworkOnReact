import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <main className="app-wrapper-content">
        <Route
          path="/profile/:id?"
          render={() => <ProfileContainer/>}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer/>}
        />

        <Route
          path="/users" 
          render={() => <UsersContainer/>}
        />

        <Route
          path="/login" 
          render={() => <Login/>}
        />

        {/* <Redirect from='**' to="/profile"/> */}
      </main>
    </div>
  );
}

export default App;
