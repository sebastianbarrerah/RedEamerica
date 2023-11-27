import React, { useEffect, useState } from 'react';
import foto from '../../assets/images/imgPerfil.png'
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
            <img className="description" src={publicacion? publicacion.archivo: "publicacion"}/>
            
        </article>
        <input type="text" className="postSend" placeholder='Comentarios' />
        <article className="post__comment">
            <div className="comment">
                <img src={foto} alt="foto de perfil" className="img__comment" />
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
