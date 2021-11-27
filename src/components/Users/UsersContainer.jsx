import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersTotalCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;