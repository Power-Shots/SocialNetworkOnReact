import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.id;
    if(!userId) userId = 2
    this.props.getUserProfile(userId)
  }

  render() {
    if(!this.props.isAuth) {
      return <Redirect from='/profile' to="/login"/>
    }
    return (
      <Profile {...this.props} profile={this.props.profile}/>
  )};
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  getUserProfile
})(WithUrlDataContainerComponent);
