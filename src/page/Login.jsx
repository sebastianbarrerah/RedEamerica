import React from 'react'
import Red from '../components/red/Red'
import LoginForm from '../components/loginAndRegister/LoginForm'
import './RegisAndLogin.scss'

const Login = () => {
  return (
    <div className='login'>
        <LoginForm/>
        <Red/>
    </div>
  )
}

export default Login
