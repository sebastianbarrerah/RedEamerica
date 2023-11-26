import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/barra-menu.png";
import cerrar from "../../assets/images/cerrar.png";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="container__header">
      <nav className="header__nav">
        <ul className="header__ul">
          <Link to="/Home">
            <li className="header__li--logo">
              <img src={logo} alt="Logo RedEamerica" className="header__img" />
            </li>
          </Link>
          <div className="menu">
            <Link to="/Perfil">
              <li className="header__li">Perfil</li>
            </Link>
            <Link to="/">
              <li className="header__li--mobile cerrar__sesion">
                Cerrar Sesión
              </li>
            </Link>
          </div>
        </ul>
      </nav>
      {/* mobile */}
      <section className="header__mobile">
        <img src={logo} alt="logo RedEamerica" />
        <img src={menu} alt="menu hamburguesa" onClick={openMenu} />
      </section>
      <div className={`${open ? "header__container--mobile" : "cerrado"}`}>
        <IoClose
          color="yellowgreen"
          src={cerrar}
          alt="icono cerrar"
          className="cerrar"
          onClick={closeMenu}
        />
        ;
        <ul className="header__ul--mobile">
          <Link to="/Perfil">
            <li className="header__li--mobile">Perfil</li>
          </Link>
          <Link to="/Post">
            <li className="header__li--mobile">Posts</li>
          </Link>
          <Link to="/">
            <li className="header__li--mobile cerrar__sesion">Cerrar Sesión</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
