import React, { useEffect, useState } from "react";
import sujeto from "../../assets/sujeto.jpg";
import ImgPost from "../../assets/abuela.jpg";
import { FaUserAstronaut } from "react-icons/fa";
import "./Post.scss";
import foto from '../../assets/images/imgPerfil.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../services/getUser';

const Post = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const location = useLocation() 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setUserData(data);
        setLoading(false);
        console.log("Datos actualizados:", data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px" }}>  
        Cargando...
      </p> 
    );
  }

  const irPost = (user) => {
    navigate("/post", { state: user });
  }

  return (
    
      <section >
      {
        userData.map((user, index)=> (
        <div className="secPost__ImgNameTxt" key={index} onClick={() => {irPost(user)}}>
          <div className="secPost__ImgName">
            <img className="sujeto" src={foto} alt="imagen del documento" />
            <div className="iconName">
            <FaUserAstronaut color="yellowgreen" />
            <p className="nombre">{user.name}</p>
            </div>
          </div>
          {user.posts.map((post, postIndex) => (
            <div className="secPost__ImgTxt" key={postIndex}>
              <span>{post.titulo}</span>
              <img src={post? post.archivo: foto} alt="imagen post" className="publicacion"/>
              <span className="secPost__p">{post.descripcion}</span>
            </div>
          ))}
        </div>
        ))
      }
        <div className="comentariosContainer">
          <input type="text" placeholder="Comenta" />
        </div>
      </section>
  
  );
};

export default Post;
