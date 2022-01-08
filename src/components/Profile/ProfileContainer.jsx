import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.id;
    if(!userId) userId = 21221
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    
    return (
      <Profile {...this.props} 
                status={this.props.status} 
                profile={this.props.profile}
                updateStatus={this.props.updateStatus}/>
  )};
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

 export default compose(
                  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
                  withRouter,
                )(ProfileContainer)
