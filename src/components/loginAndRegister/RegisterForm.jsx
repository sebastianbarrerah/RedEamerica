import React from 'react';
import './RegAndLogForm.scss';

const RegisterForm = () => {
  return (
    <div className='registerForm'>
      <h1 className='registerTittle'>Registro</h1>
      <form action="" className='registerInputs'>
        <input type="text" placeholder='Nombre' required/>
        <input type="email" placeholder='Correo' required/>
        <input type="date"  placeholder='Fecha de nacimiento' required/>
        <input type="text" placeholder='País' required/>
        <input type="password" placeholder='Contraseña' required/>
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  )
}

export default RegisterForm
