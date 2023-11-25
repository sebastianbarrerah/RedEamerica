import React from 'react'
import Red from '../components/red/Red'
import RegisterForm from '../components/loginAndRegister/RegisterForm'
import './RegisAndLogin.scss';

const Register = () => {
  return (
    <div className='register'>
      <Red/>
      <RegisterForm/>
    </div>
  )
}

export default Register
