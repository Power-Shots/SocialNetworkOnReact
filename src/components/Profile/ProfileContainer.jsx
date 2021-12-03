import axios from "axios";
import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile } from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    if(!id) id = 2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setUserProfile
})(WithUrlDataContainerComponent);
