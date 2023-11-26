import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/barra-menu.png';
import wpp from '../../assets/images/wpp.png';
import ig from '../../assets/images/ig.png';
import fb from '../../assets/images/fb.png';
import cerrar from '../../assets/images/cerrar.png';
import './navbar.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { closeSession } from '../../services/loginUsers';

const Navbar = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const [open, setOpen] = useState(false);
const openMenu = () => {
  setOpen(true)
}
const closeMenu = () => {
  setOpen(false)
}

const cerrarSesion = () => {
  console.log("funciona")
  try {
    dispatch(closeSession());
    navigate("/")
  } catch (error) {
    console.log(error);
  }
};

  return (
    <header className='container__header'>
      <nav className='header__nav'>
        <ul className='header__ul'>
          <li className='header__li--logo'><img src={logo} alt="Logo RedEamerica" onClick={() => navigate("/home")} className='header__img'/></li>
          <li className='header__li'>Perfil</li>
          <li className='header__li' onClick={cerrarSesion}>Cerrar Sesión</li>
        </ul>
      </nav>
      {/* mobile */}
      <section className="header__mobile">
        <img src={logo} alt="logo RedEamerica" />
        <img src={menu} alt="menu hamburguesa" onClick={openMenu}/>
      </section>
      <div className={`${open?"header__container--mobile": "cerrado"}`}>
        <img src={cerrar} alt="icono cerrar"  className='cerrar' onClick={closeMenu}/>
          <ul className="header__ul--mobile">
            <li className="header__li--mobile">Inicio</li>
            <li className="header__li--mobile">Quienes somos</li>
            <li className="header__li--mobile">Perfil</li>
            <li className="header__li--mobile">Posts</li>
            <li className="header__li--mobile cerrar__sesion" onClick={cerrarSesion}>Cerrar Sesión</li>
          </ul>
          <figure className='container__img-redes'>
              <img src={wpp} alt="icono-whatsapp" className='mobiel__redes'/>
              <img src={ig} alt="icono-instagram" className='mobiel__redes'/>
              <img src={fb} alt="icono-facebook" className='mobiel__redes'/>
          </figure>
      </div>
    </header>
  )
}

export default Navbar;