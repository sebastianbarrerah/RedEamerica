import React from "react";
import "./RegAndLogForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { loginUsers } from "../../services/loginUsers";
import { loginState } from "../../features/login/loginSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    try {
      await dispatch(loginUsers(data));
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerForm">
      <h1 className="registerTittle">Bienvenido</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputError">
          <input
            type="email"
            placeholder="Correo"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>
              Debe ingresar el correo electronico
            </span>
          )}
        </div>
        <div className="inputError">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span style={{ color: "red" }}>Debe ingresar su contraseña</span>
          )}
        </div>
        <button type="submit">Ingresar</button>
        <button type="button">RedEamerica</button>
        <button
          type="button"
          onClick={() => {
            navigate("/register");
          }}
        >
          Registrate
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
