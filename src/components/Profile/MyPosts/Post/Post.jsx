import React from "react";

import style from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={style.item} id={props.id}>
      <img src="https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg"></img>
      {props.message}
      <div className={style.like}>
        Like
        <span>{props.count}</span>
      </div>
    </div>
  );
};
export default Post;
