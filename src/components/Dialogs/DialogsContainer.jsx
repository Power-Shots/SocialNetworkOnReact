import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,{
  updateNewMessageBody,
  sendMessage
})(AuthRedirectComponent)


export default DialogsContainer
