import axios from "axios";
import React, {Component} from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response =>  {
          this.props.setUserProfile(response.data)
        })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
  )};
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileContainer);
