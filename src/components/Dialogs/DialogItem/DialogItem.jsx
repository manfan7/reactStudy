import React from "react";
import style from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${style.dialog} ${style.active}`}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : undefined)}
        to={`/dialogs/${props.id}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
