import React from "react";
import "./UsuarioInfo.scss";
import sujeto from "../../assets/sujeto.jpg";
import { FaUserAstronaut } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoEarth } from "react-icons/io5";

function UsuarioInfo() {
  return (
    <section className="UsuarioInfo">
      <img className="img" src={sujeto} alt="" />
      <div className="UsuarioInfo__txt">
        <div className="iconInfo">
          <FaUserAstronaut color="yellowgreen" />
          <p className="nombre">Estela Martínez Pérez</p>
        </div>

        <div className="iconInfo">
          <MdOutlineMailOutline color="yellowgreen" />
          <p className="email">estela@gmail.com</p>
        </div>

        <div className="iconInfo">
          <LiaBirthdayCakeSolid color="yellowgreen" />
          <p className="cumple">11/09/1980</p>
        </div>

        <div className="iconInfo">
          <IoEarth color="yellowgreen" />
          <p className="pais">Colombia</p>
        </div>
      </div>
    </section>
  );
}

export default UsuarioInfo;
