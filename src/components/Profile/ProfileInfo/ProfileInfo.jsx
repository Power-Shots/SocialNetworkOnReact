import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/userPhoto/userPhoto 256px.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

  if(!props.profile) return <Preloader/>

  return (
    <div>
      <div className={s.infoBlock}>
        <div className={s.avatarBlock}>
          <img src={props.profile.photos.large?props.profile.photos.large: 'https://ps.w.org/simple-user-avatar/assets/icon-128x128.png?rev=2413146"'}/>
        </div>
        <div className={s.descriptionBlock}>
          <p className={s.fullname}>{props.profile.fullName}</p>
          {/* <p className={s.status}>{props.profile.aboutMe}</p> */}
          <ProfileStatus status={props.profile.aboutMe}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
