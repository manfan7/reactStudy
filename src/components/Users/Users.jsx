import React from "react";
import style from "./Users.module.css";

import defaultImage from "../../assets/images/eric-cantona-3.png";
import { NavLink, useNavigate } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((item) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(item);
              }}
              className={
                (props.currentPage === item && style.selectedPage) ||
                style.paginate
              }
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className={style.userscont}>
        {props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null
                        ? user.photos.small
                        : defaultImage
                    }
                    className={style.usersphoto}
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
