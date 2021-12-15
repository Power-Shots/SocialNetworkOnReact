import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

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
  profile: state.profilePage.profile,
})


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)



 connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

 export default compose(
                  connect(mapStateToProps, {getUserProfile}),
                  withRouter,
                  WithAuthRedirect
                )(ProfileContainer)
