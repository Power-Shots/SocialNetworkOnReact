import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  
  
  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
   )
}

export default DialogsContainer
