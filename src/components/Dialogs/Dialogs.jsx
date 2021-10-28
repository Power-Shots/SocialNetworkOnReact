import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <div className={s.dialog + ' ' + s.activeDialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = (props) => {
  const dialogs = [
    {
      id: 1,
      name: 'Vasya'
    },
    {
      id: 2,
      name: 'Elena'
    },
    {
      id: 3,
      name: 'Vadim'
    },
  ] 
  const messages = [
    {
      id: 1,
      text: 'Hi'
    },
    {
      id: 2,
      text: 'How are you?'
    },
    {
      id: 3,
      text: 'Good bye'
    },
  ] 

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map(dialog => 
            <DialogItem name={dialog.name} id={dialog.id}/>
          )}
      </div>
      <div className={s.messages}>
        {messages.map(message => 
          <Message message={message.text} id={message.id}/> 
        )}
      </div>
    </div>
  )
}

export default Dialogs
