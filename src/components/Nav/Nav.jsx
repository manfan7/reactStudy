import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import FriendsItem from "./NavFriend";

const Nav = (props) => {
  let FriendsSideEl = props.state.map((el) => {
    return <FriendsItem friend={el.friend} color={el.color} id={el.id} />;
  });
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="music"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="users"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Users
        </NavLink>
      </div>
      <div className={classes.itemfriends}>{FriendsSideEl}</div>
    </nav>
  );
};
export default Nav;
