import React from 'react';
import { connect } from 'react-redux';
import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}


// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewMessageBody: (body) => {
//       dispatch(updateNewMessageBodyCreator(body))
//     },
//     sendMessage: () => {
//       dispatch(sendMessageCreator())
//     },
//   }
// }

const DialogsContainer = connect(mapStateToProps,{
  updateNewMessageBody,
  sendMessage
})(Dialogs)

export default DialogsContainer
