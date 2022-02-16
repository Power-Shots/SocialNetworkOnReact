import React from "react"
import { reduxForm, Field } from "redux-form"
import { maxLengthCreator, requiredField } from "../../../utils/validators"
import { Textarea } from "../../common/FormsControls/FormsControls"


const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field name="newMessageBody" 
                 component={Textarea}
                 placeholder={'Enter your message'}
                 validate={[requiredField, maxLength100]}/>
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'dialogsAddMessageForm'
})(AddMessageForm)