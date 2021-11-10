import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
