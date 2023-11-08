import React from "react";
import ContentImage1 from "../../../miami.jpg";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import lookingJob from "../../../assets/images/reviewok.png";
import ignoreJob from "../../../assets/images/false.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.wrap}>
      Main Content
      <div>
        <img src={ContentImage1}></img>
      </div>
      <div className={style.usercontent}>
        <img src={props.profile.photos.large} />
        <div className={style.usercontent_job}>
          <p>{props.profile.fullName}</p>
          <p>Looking for a job</p>
          <img
            src={props.profile.lookingForAJob == true ? lookingJob : ignoreJob}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
