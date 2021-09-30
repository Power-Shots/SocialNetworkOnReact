import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={s.banerBlock}>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
