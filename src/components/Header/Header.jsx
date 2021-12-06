import React from "react";
import { NavLink } from "react-router-dom";
import logo from './../../assets/images/logo/logo.png';
import s from './Header.module.css';

const Header = ({isAuth, login}) => {
  return (
    <header className={s.header}>
      <img src={logo}/>
      <div className={s.loginBlock}>
        {
          isAuth
          ? <h3>{login}</h3>
          : <NavLink to="login">Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
