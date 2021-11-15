import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext';

import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const DialogsContainer = (props) => {
  

  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body))
        }
      
        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }

        return (
          <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        )
      }}
    </StoreContext.Consumer>    
   )
}

export default DialogsContainer
