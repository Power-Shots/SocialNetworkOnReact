import axios from 'axios'
import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../api/api'
import { getAuthUserData } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends Component {

  componentDidMount() {
    this.props.getAuthUserData()
  }


  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})



export default connect(mapStateToProps, {
  getAuthUserData,
})(HeaderContainer)
