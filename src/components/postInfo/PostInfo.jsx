import React, { useEffect, useState } from "react";
import "./postInfo.scss";
import { useLocation } from "react-router";
import PostComment from "../postComment/PostComment";
import foto from "../../assets/images/imgPerfil.png";

const PostInfo = () => {
  const location = useLocation();
  const [dataUser, setDataUser] = useState();
  const [dataPost, setDataPost] = useState();

  useEffect(() => {
    if (location.state) {
      console.log(location.state, "esto lo de location");
      const infoPersonal = location.state;
      const infoPosts = location.state.posts;
      setDataUser(infoPersonal);
      setDataPost(infoPosts);
    }
  }, []);

  console.log("esto es personal", dataUser);
  console.log("esto es post", dataPost);
  return (
    <section className="container__postInformacion">
      <div className="container__personal">
        <figure className="img__informacion">
          <img src={foto} alt="Foto personal" className="foto__informacion" />
        </figure>
        <div className="nombrePais">
          <span className="informacion__name">
            {dataUser ? dataUser.name : "Usuario"}
          </span>
          <span className="informacion__pais">
            {dataUser ? dataUser.country : "Usuario"}
          </span>
        </div>
      </div>
      <PostComment dataPost={dataPost} />
    </section>
  );
};
export default PostInfo;
