import React from "react";
import "./CrearPost.scss";
import "../../components/loginAndRegister/RegAndLogForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { agregarPost } from "../../services/addPost";
import { useSelector } from "react-redux";
import Navbar from "../header/Navbar";

const CrearPost = () => {
  const userId = useSelector((state) => state.userId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const nuevoPost = {
      titulo: data.titulo,
      descripcion: data.descripcion,
      archivo: data.archivo,
    };
    agregarPost(nuevoPost, userId);
    reset();
    navigate("/Perfil");
  };

  return (
    <>
      <Navbar />
      <secction className="secCrearPost">
        <h2>Crear post</h2>
        <form
          action=""
          className="registerInputs"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="inputError">
            {" "}
            <label>Título</label>
            <input
              type="text"
              placeholder="Encuentro social"
              name="titulo"
              {...register("titulo", { required: true })}
            />
            {errors.titulo && (
              <span className="span">Debe ingresar el Título</span>
            )}
          </div>

          <div className="inputError">
            {" "}
            <label>Contenido</label>
            <input
              type="text"
              placeholder="Ingresa por favor el link del archivo"
              name="archivo"
              {...register("archivo", { required: true })}
            />
            {errors.archivo && (
              <span className="span">Debe seleccionar un archivo</span>
            )}
          </div>

          <div className="inputError">
            {" "}
            <label>Descripción</label>
            <input
              type="text"
              placeholder="Comparte tus ideas y conocimientos"
              name="descripcion"
              {...register("descripcion", { required: true })}
            />
            {errors.descripcion && (
              <span className="span">Debe ingresar el nombre</span>
            )}
          </div>
          <button type="submit">Publicar</button>
        </form>
      </secction>
    </>
  );
};
export default CrearPost;
