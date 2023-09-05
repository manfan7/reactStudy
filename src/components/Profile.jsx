import React from "react";
import ContentImage1 from "../miami.jpg";
const Profile = () => {
  return (
    <div className="content">
      Main Content
      <div>
        <img src={ContentImage1}></img>
      </div>
      <div>ava</div>
      <div>
        My post
        <div>New Post</div>
        <div>
          <div>post11</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
