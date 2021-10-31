import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogs.map(dialog => 
            <DialogItem name={dialog.name} id={dialog.id}/>
          )}
      </div>
      <div className={s.messages}>
        {props.messages.map(message => 
          <Message message={message.text} id={message.id}/> 
        )}
      </div>
    </div>
  )
}

export default Dialogs
