import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newMessageBody" component={'textarea'} placeholder={'Enter your message'}/>
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({
  form: 'addMessage'
})(AddMessageForm)

const Dialogs = (props) => {

  const state = props.dialogsPage

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody)
  }

  if(!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogs.map(dialog => 
            <DialogItem name={dialog.name} id={dialog.id}/>
          )}
      </div>
      <div className={s.messages}>
        <div className={s.messageWrapper}>
          {state.messages.map(message => 
            <Message message={message.message} key={message.id} id={message.id}/> 
          )}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs
