import React from 'react';
import './RegAndLogForm.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }


  return (
    <div className='registerForm'>
      <h1 className='registerTittle'>Bienvenido</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Correo' name='email' {...register("email" , {required: true})}/>
        {errors.email && <span style={{color: "red"}}>Debe ingresar el correo electronico</span>}
        <input type="password" placeholder='Contraseña' name='password' {...register("password" , {required: true})}/>
        {errors.password && <span style={{color: "red"}}>Debe ingresar su contraseña</span>}
        <button type="submit" >Ingresar</button>
        <button>RedEamerica</button>
        <button onClick={navigate("/register")}>Registrate</button>
      </form>
    </div>
  )
}

export default LoginForm;
