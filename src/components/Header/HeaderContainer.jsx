import axios from 'axios'
import React, { Component, useEffect }  from 'react'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../redux/authReducer'
import Header from './Header'

// class HeaderContainer extends Component {

//   componentDidMount() {
//     this.props.getAuthUserData();
//   };


//   render() {
//     return (
//       <Header {...this.props}/>
//     )
//   }
// };

const HeaderContainer = (props) => {


  useEffect(()=> {
    props.getAuthUserData();
  }, [])

  return (
    <Header {...props}/>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});



export default connect(mapStateToProps, {
  getAuthUserData,
  logout
})(HeaderContainer)
