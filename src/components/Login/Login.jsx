import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field type={'text'} name={'login'} placeholder={'login'} component={'input'}/>
        </div>
        <div>
          <Field type={'text'} name={'password'} placeholder={'password'} component={'input'}/>
        </div>
        <div>
          <Field id={'rememberMe'} name={'rememberMe'} type={'checkbox'} component={'input'}/> 
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
