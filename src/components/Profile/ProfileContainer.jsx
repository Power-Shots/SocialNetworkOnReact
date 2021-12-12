import axios from "axios";
import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUserProfile, setUserProfile } from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.id;
    if(!userId) userId = 2
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
  )};
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setUserProfile,
  getUserProfile
})(WithUrlDataContainerComponent);
