import axios from 'axios'
import React from 'react'
import userPhotoPNG from '../../assets/userPhoto/userPhoto 256px.png'
import s from './Users.module.css'

const Users = (props) => {
  const getUsers = () => {
    if(props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          console.log(response)
          props.setUsers(response.data.items)
          })
    }
  }
  
  

  
    




  return (
    <div className={s.content}>
      <button onClick={getUsers}>Get users</button>
      {props.users.map(u => 
        <div key={u.id} >
          <span>
            <div className={s.userPhotoBlock}>
              <img src={u.photos.small !== null ? u.photos.small : userPhotoPNG } className={s.userPhoto} alt={`${u.fullname} photo`} />
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
