import React, { useEffect, useState } from 'react';
import './postComment.scss';
import { useLocation } from 'react-router';
const PostComment = ({dataPost}) => {
    console.log(dataPost, "esto es de children");
    // const [dataUser1, setDataUser1] = useState()
    // const [dataPost1, setDataPost1] = useState()
    // const location = useLocation()
    // useEffect(() => {
    //     if(location.state){
    //       console.log(location.state,"esto lo de location");
    //       const infoPersonal1 = location.state;
    //       const infoPosts1 = location.state.posts;
    //       console.log(infoPersonal1);
    //       setDataUser1(infoPersonal1)
    //       setDataPost1(infoPosts1)
    //     }
    //   }, [])

  return (
    <section className="container__comment">
        <article className="post__description">
            <h1 className='title__post'>{dataPost.titulo? dataPost.titulo:"Titulo Publicación"}</h1>
            <p className="description">
            {data.descripcion?data.descripcion:"Descripcion del proyecto"}
            </p>
        </article>
        <input type="text" className="postSend" placeholder='Comentarios' />
        <article className="post__comment">
            <div className="comment">
                <img src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg" alt="foto de perfil" className="img__comment" />
                <div className="container__name--comment">
                    <span className="name__comment">Juan perez garcia</span>
                    <span className="comment__check">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam doloremque, nulla ipsam dolore illum?</span>
                </div>
            </div>
        </article>
    </section>
  )
}

export default PostComment;