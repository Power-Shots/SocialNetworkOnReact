import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormsInput } from '../common/FormsControls/FormsControls'
import {requiredField, minLengthCreator, emailValidator} from '../../utils/validators'

const minLength8 = minLengthCreator(8)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field type={'text'} name={'login'} placeholder={'login'} component={FormsInput}
          validate={[requiredField, emailValidator]}/>
        </div>
        <div>
          <Field type={'password'} name={'password'} placeholder={'password'} component={FormsInput} validate={[requiredField, minLength8]}/>
        </div>
        <div>
          <Field id={'rememberMe'} name={'rememberMe'} type={'checkbox'} component={FormsInput}/> 
          <label htmlFor='rememberMe'>Remember Me</label>
        </div>
        <div>
          <button type='submit'>Отправить</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)



const Login = () => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login
