 import React from 'react';
import { NavLink } from 'react-router-dom';
 import userPhotoPNG from '../../assets/images/userPhoto/userPhoto 256px.png'
 import s from './Users.module.css'
 
 const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = []

  for(let i = 1; i<=pagesCount; i++){
    pages = [...pages, i]
  }




   return (
    <div className={s.content}>
    <div className={s.paginationBlock} >
      {pages.map(p => 
        <span onClick={() => props.onPageChanged(p)}
              className={`${s.selectPage} ${props.currentPage === p? s.active: ''}`}>{p}</span>
      )}
    </div>
  {props.users.map(u => 
    <div key={u.id} >
      <span>
        <div className={s.userPhotoBlock}>
          <NavLink to={`/profile/${u.id}`}>
            <img src={u.photos.small !== null ? u.photos.small : userPhotoPNG } 
                className={s.userPhoto} alt={`${u.fullname} photo`} />
          </NavLink>
          
        </div>
        <div>
          {u.followed
          ?<button onClick={()=> props.unfollow(u.id)}>Unfollow</button>
          :<button onClick={()=> props.follow(u.id)}>Follow</button>
          }
          
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </span>
      </span>
    </div>
  )}
</div>
   )
 }
 
 export default Users
 