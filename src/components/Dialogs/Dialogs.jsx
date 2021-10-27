import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.activeDialog}>
          <NavLink to="/dialogs/1">Vacya</NavLink>
          
        </div>
      
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Petya</NavLink>
          
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
          
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Good bey</div>
      </div>
    </div>
  )
}

export default Dialogs
