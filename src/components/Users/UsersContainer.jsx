import React, {Component} from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersTotalCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import * as axios from 'axios'
import Users from "./Users";

export class UsersContainer extends Component {

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

    return (
      <Users users={this.props.users}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             follow={this.props.follow}
             unfollow={this.props.unfollow}/>
    )
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userID) => {
    dispatch(followAC(userID))
  },
  unfollow: (userID) => {
    dispatch(unfollowAC(userID))
  },
  setUsers: (users) => {
    dispatch(setUsersAC(users))
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber))
  },
  setTotalCount: (totalCount) => {
    dispatch(setUsersTotalCountAC(totalCount))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

