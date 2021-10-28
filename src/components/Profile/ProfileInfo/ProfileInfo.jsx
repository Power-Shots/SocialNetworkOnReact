import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.banerBlock}>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo
