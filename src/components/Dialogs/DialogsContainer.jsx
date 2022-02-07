import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { sendMessage } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}



const DialogsContainer = compose(
  connect(mapStateToProps,{
    sendMessage
  }),
  WithAuthRedirect
)(Dialogs)


export default DialogsContainer
