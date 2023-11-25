import React from "react";
import "./RegAndLogForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/");
  };

  return (
    <div className="registerForm">
      <h1 className="registerTittle">Registro</h1>
      <form
        action=""
        className="registerInputs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="inputError">
          {" "}
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="span">Debe ingresar el nombre</span>}
        </div>

        <div className="inputError">
          {" "}
          <input
            type="email"
            placeholder="Correo"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="span">Debe ingresar el correo electronico</span>
          )}
        </div>

        <div className="inputError">
          {" "}
          <input
            type="date"
            name="date"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <span className="span">Debe ingresar la fecha de naciemiento</span>
          )}
        </div>
        <div className="inputError">
          {" "}
          <input
            type="text"
            placeholder="País"
            name="country"
            {...register("country", { required: true })}
          />
          {errors.country && (
            <span className="span">Debe ingresar el país de residencia</span>
          )}
        </div>

        <div className="inputError">
          {" "}
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="span">Debe ingresar la contraseña</span>
          )}
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
