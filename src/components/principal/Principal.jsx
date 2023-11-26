import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../services/getUser';


const Principal = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const location = useLocation() 
  const params = useParams()

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
    <div>
      <h1>Esto es principal</h1>
      {/* Informacion del usuario */} 
      {userData.map((user, index) => ( 
        <div style={{ display: "flex", flexDirection: "column" }} key={index} onClick={() => {irPost(user)}}>
          <span>Nombre: {user.name}</span>
          <strong>Publicaciones:</strong>
          {/* Publicaciones */}
          {user.posts.map((post, postIndex) => (
            <div key={postIndex}>
                <span>Título del post: {post.titulo}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Principal;