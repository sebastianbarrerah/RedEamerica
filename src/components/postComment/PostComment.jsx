import React, { useEffect, useState } from 'react';
import './postComment.scss';
const PostComment = ({ dataPost }) => {
    const [comentario, setcomentario] = useState([])
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
            <h1 className='title__post'>{publicacion? publicacion.titulo:"Titulo publicación"}</h1>
            <p className="description">
            {publicacion? publicacion.descripcion: "publicacion"}
            </p>
        </article>
        <input type="text" className="postSend" placeholder='Comentarios' />
        <article className="post__comment">
            <div className="comment">
                <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" alt="foto de perfil" className="img__comment" />
                <div className="container__name--comment">
          
                            <span className="name__comment">{comentario?comentario.nombreComentario:"comentario"}</span>
                            <span className="comment__check">{comentario?comentario.nombreComentario:"descripcion"}</span>
       
                </div>
            </div>
        </article>
    </section>
  );
};

export default PostComment;
