import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
  
  const newMessageBody = props.state.newMessageBody;
  console.log(newMessageBody)

  
  
  const onNewMessageChange = (e) => {
    console.log(e.target.value)
    let body = e.target.value
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogs.map(dialog => 
            <DialogItem name={dialog.name} id={dialog.id}/>
          )}
      </div>
      <div className={s.messages}>
        <div className={s.messageWrapper}>
          {props.state.messages.map(message => 
            <Message message={message.message} id={message.id}/> 
          )}
        </div>
        <div>
          <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
