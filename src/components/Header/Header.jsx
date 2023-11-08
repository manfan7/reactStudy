import React from "react";
import headerstyle from "./Header.module.css";
import HeaderImage from "../../pngwing.com.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={headerstyle.header}>
      <img src={HeaderImage}></img>
      <div className={headerstyle.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
