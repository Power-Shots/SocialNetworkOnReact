import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

  if(!props.profile) return <Preloader/>
  return (
    <div>
      <div className={s.banerBlock}>
        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatarBlock}>
          <img src={props.profile.photos.large}/>
        </div>
        <div>
          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
