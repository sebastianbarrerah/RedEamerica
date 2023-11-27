import React from "react";
import sujeto from "../../assets/sujeto.jpg";
import ImgPost from "../../assets/abuela.jpg";
import { FaUserAstronaut } from "react-icons/fa";
import "./Post.scss";

const Post = () => {
  return (
    <section>
      <div className="secPost__ImgNameTxt">
        <div className="secPost__ImgName">
          <img className="sujeto" src={sujeto} alt="" />
          <div className="iconName">
            <FaUserAstronaut color="yellowgreen" />
            <p className="nombre">Consuelo Correa</p>
          </div>
        </div>
        <div className="secPost__ImgTxt">
          <img
            className="publicacion"
            src="https://live.staticflickr.com/4504/37150341454_cf597bd461_b.jpg"
            alt=""
          />
          <p className="secPost__p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam, aliquam excepturi! Odio omnis deserunt assumenda velit
            doloribus accusantium amet necessitatibus?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Post;
