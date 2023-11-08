import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => {
    return <Post message={el.message} id={el.id} count={el.likesCount} />;
  });
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    if (text != "") {
      props.addPost();
    }
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.updateNewPostText(text);
  };
  return (
    <div className={style.PostsClass}>
      <h3>My Posts</h3>
      <div className={style.PostsClassItem}>
        <textarea
          onChange={onPostChange}
          placeholder="your posts"
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
