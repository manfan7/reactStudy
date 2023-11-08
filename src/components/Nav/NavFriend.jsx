import React from "react";
import classes from "./Nav.module.css";

const FriendsItem = (props) => {
  return (
    <div className={classes.itemFr}>
      <p>{props.friend}</p>
      <div
        className={classes.icon}
        style={{ backgroundColor: `${props.color}` }}
      ></div>
    </div>
  );
};
export default FriendsItem;
