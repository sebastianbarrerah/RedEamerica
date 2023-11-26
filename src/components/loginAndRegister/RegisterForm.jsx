import React from 'react';
import './RegAndLogForm.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { addUsers } from '../../services/addUsers'; 
import Swal from 'sweetalert2'; 
import { addCollection } from '../../services/addCollection';

const RegisterForm = () => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm();
  const navigate = useNavigate()


  const onSubmit = async(data) => {
    const user = {
      email: data.email,
      name: data.name,
      date: data.date,
      country: data.country,
      password: data.password,
      posts: [],
      state: false,
      region: `${data.country == "colombia" || "venezuela" || "brasil" || "peru" || "ecuador" || "argentina" || "uruguay" || "Colombia" || "Brasil" || "Venezuela" || "Argentina"? "sur": "norte"}`
    }
    try {
      await addCollection(user)
      Swal.fire("Usuario creado con exito", "Inicia sesión", "success");
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='registerForm'>
      <h1 className='registerTittle'>Registro</h1>
      <form action="" className='registerInputs' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Nombre' name='name' {...register("name" , {required: true})}/>
        {errors.name && <span style={{color: "red"}}>Debe ingresar el nombre</span>}

        <input type="email" placeholder='Correo' name='email' {...register("email" , {required: true})}/>
        {errors.email && <span style={{color: "red"}}>Debe ingresar el correo electronico</span>}

        <input type="date"  placeholder='Fecha de nacimiento' name='date' {...register("date" , {required: true})}/>
        {errors.date && <span style={{color: "red"}}>Debe ingresar la fecha de naciemiento</span>}

        <input type="text" placeholder='País' name='country' {...register("country" ,
         {required: true})}/>
        {errors.country && <span style={{color: "red"}}>Debe ingresar el pais de residencia</span>}

        <input type="password" placeholder='Contraseña' name='password' {...register("password" ,
        {required: true, minLength: 6})}/>
        {errors.password && <span style={{color: "red"}}>Debe ingresar la contraseña</span>}
        {errors.minLength && <span style={{color: "red"}}>La contraseña es demasiado corta</span>}

        <button type='submit'>Registrarse</button>
        
      </form>
    </div>
  )
}

export default RegisterForm
