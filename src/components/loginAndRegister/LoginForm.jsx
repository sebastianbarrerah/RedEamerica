import React from 'react';
import './RegAndLogForm.scss';

const LoginForm = () => {
  return (
    <div className='registerForm'>
      <h1 className='registerTittle'>Bienvenido</h1>
      <form action="">
        <input type="email" placeholder='Correo'/>
        <input type="password" placeholder='Contraseña'/>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default LoginForm
