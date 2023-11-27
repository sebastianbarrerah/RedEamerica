import React, { useEffect, useState } from "react";
import foto from "../../assets/images/imgPerfil.png";
import "./postComment.scss";
const PostComment = ({ dataPost }) => {
  const [comentario, setcomentario] = useState([]);
  if (!Array.isArray(dataPost) || dataPost.length === 0) {
    console.error("El array de comentarios está vacío o no es un array.");
    return null;
  }
  const publicacion = dataPost[0];
  console.log(publicacion, "esto es el comentario");
  console.log(publicacion.comentarios);

  return (
    <section className="container__comment">
      <article className="post__description">
        <img
          className="description"
          src={publicacion ? publicacion.archivo : "publicacion"}
        />
      </article>
      <div className="tituloDescripsion">
        <h1 className="title__post">
          {publicacion ? publicacion.titulo : "Titulo publicación"}
        </h1>
        <p>{publicacion ? publicacion.descripcion : "Titulo publicación"}</p>
      </div>
    </section>
  );
};

export default PostComment;
