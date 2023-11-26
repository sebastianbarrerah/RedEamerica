import React from "react";
import "./postComment.scss";

const PostComment = () => {
  return (
    <section className="container__comment">
      <article className="post__description">
        <h1 className="title__post">Título del post</h1>
        <p className="description">
          ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laborum
          officiis! Similique atque voluptate voluptates sed recusandae?
          Dolores, atque! Ea accusamus porro tempora quis veniam omnis et
          numquam, adipisci accusantium autem ipsam sed, magni minus quia
          placeat quasi perferendis ad excepturi blanditiis doloribus earum
          perspiciatis. Officia consequatur eveniet sint a!
        </p>
      </article>
      <input type="text" className="postSend" placeholder="Comentar" />
      <article className="post__comment">
        <div className="comment">
          <img
            src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
            alt="foto de perfil"
            className="img__comment"
          />
          <div className="container__name--comment">
            <span className="name__comment">Juana Ruiz</span>
            <span className="comment__check">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magnam doloremque, nulla ipsam dolore illum?
            </span>
          </div>
        </div>
        <div className="comment">
          <img
            src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
            alt="foto de perfil"
            className="img__comment"
          />
          <div className="container__name--comment">
            <span className="name__comment">Juana Ruiz</span>
            <span className="comment__check">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magnam doloremque, nulla ipsam dolore illum?
            </span>
          </div>
        </div>
        <div className="comment">
          <img
            src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
            alt="foto de perfil"
            className="img__comment"
          />
          <div className="container__name--comment">
            <span className="name__comment">Juana Ruiz</span>
            <span className="comment__check">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magnam doloremque, nulla ipsam dolore illum?
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PostComment;
