import React from "react";
import sujeto from "../../assets/sujeto.jpg";
import ImgPost from "../../assets/abuela.jpg";
import "./Post.scss";

const Post = () => {
  return (
    <>
      <section className="secPost">
        <div className="secPost__ImgNameTxt">
          <div className="secPost__ImgName">
            <img className="sujeto" src={sujeto} alt="" />
            <p className="nombre">Consuelo Correa</p>
          </div>
          <div className="secPost__ImgTxt">
            <img src={ImgPost} alt="" />
          </div>
        </div>
        <div className="comentariosContainer">
          <input type="text" placeholder="Comenta" />
        </div>
      </section>
    </>
  );
};

export default Post;
