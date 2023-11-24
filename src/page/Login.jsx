import React from 'react'
import Red from '../components/Red'
import LoginForm from '../components/LoginForm'
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
