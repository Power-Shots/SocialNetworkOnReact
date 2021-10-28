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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Vasya" id="1"/>
        <DialogItem name="Petya" id="2"/>
        <DialogItem name="Sveta" id="3"/>
        <DialogItem name="Misha" id="1"/>
      </div>
      <div className={s.messages}>
        <Message message="Hello"/>
        <Message message="How are you?"/>
        <Message message="Hello"/>
      </div>
    </div>
  )
}

export default Dialogs
