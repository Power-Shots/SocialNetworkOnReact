import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.activeDialog}>
          Vacya
        </div>
      
        <div className={s.dialog}>
          Petya
        </div>
        <div className={s.dialog}>
          Sveta
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
