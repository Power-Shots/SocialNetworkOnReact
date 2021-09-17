import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>new post</div>
        <div>
          <div className="item">post 1</div>
          <div className="item">post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
