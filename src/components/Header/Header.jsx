import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo/logo.png";
import s from "./Header.module.css";

const Header = ({ isAuth, login, logout }) => {

  console.log(isAuth)
  return (
    <header className={s.header}>
      <img src={logo} />
      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            <h3>{login}</h3>
            <button onClick={() => logout()}>logout</button>
          </div>
        ) : (
          <NavLink to="login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
