import React, { Component } from 'react'
import * as axios from 'axios'
import userPhotoPNG from '../../assets/userPhoto/userPhoto 256px.png'
import s from './Users.module.css'

export class Users extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>  {
          this.props.setUsers(response.data.items)
          this.props.setTotalCount(response.data.totalCount)
        })
  }


  getUsers = (pageNumber = this.props.currentPage) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response =>  this.props.setUsers(response.data.items))
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.getUsers(pageNumber);
  }


  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = []
    for(let i = 1; i<=pagesCount; i++){
      pages = [...pages, i]
    }

    return (
      <div className={s.content}>
        <div className={s.paginationBlock} >
          {pages.map(p => 
            <span onClick={() => this.onPageChanged(p)}
                  className={`${s.selectPage} ${this.props.currentPage === p? s.active: ''}`}>{p}</span>
          )}
        </div>
      {this.props.users.map(u => 
        <div key={u.id} >
          <span>
            <div className={s.userPhotoBlock}>
              <img src={u.photos.small !== null ? u.photos.small : userPhotoPNG } className={s.userPhoto} alt={`${u.fullname} photo`} />
            </div>
            <div>
              {u.followed
              ?<button onClick={()=> this.props.unfollow(u.id)}>Unfollow</button>
              :<button onClick={()=> this.props.follow(u.id)}>Follow</button>
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
}

export default Users
