import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => ({
  users: state.usersPage.users
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
  }
})
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;