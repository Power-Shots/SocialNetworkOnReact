import React, {Component} from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching, toggleFollowingProgress } from "../../redux/usersReducer";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

export class UsersContainer extends Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>  {
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
          this.props.toggleIsFetching(false)
        })
  }


  // getUsers = (pageNumber = this.props.currentPage) => {
  //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
  //       withCredentials: true,
  //       headers : {
  //         "API-KEY": "b9fb0702-2656-4896-ae52-dd305305c241",
  //       }
  //       })
  //       .then(response => {
  //         this.props.setUsers(response.data.items)
  //         this.props.toggleIsFetching(false)
  //       })  
  // }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
    .then(data => {
      this.props.setUsers(data.items)
      this.props.toggleIsFetching(false)
    })
  }


  render() {

    return (
      <>
        {this.props.isFetching
        ? <Preloader/>
        : <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}/>}
                
        
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
})(UsersContainer);




