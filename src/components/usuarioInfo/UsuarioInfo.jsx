import React, { useEffect, useState } from "react";
import "./UsuarioInfo.scss";
import { FaUserAstronaut } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoEarth } from "react-icons/io5";
import foto from '../../assets/images/imgPerfil.png';
import { getUniqueUser } from "../../services/getUser";
import { useSelector } from "react-redux";
import { removePost } from "../../services/removePost";
import { useNavigate } from "react-router";


function UsuarioInfo() {
  const [dataPost, setdataPost] = useState([]);
  const [profile, setProfile] = useState(null);
  const userId = useSelector(state => state.userId);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataUser = await getUniqueUser(userId);
        setProfile(dataUser);
        setdataPost(dataUser.posts || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const deletePost = () => {
    try {
      removePost(dataPost, userId)
      navigate("/Home")
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="UsuarioInfo">
      <img className="img" src={foto} alt="" />
      <div className="UsuarioInfo__txt">
        {profile && (
          <>
            <div className="iconInfo">
              <FaUserAstronaut color="yellowgreen" />
              <p className="nombre">{profile.name}</p>
            </div>

            <div className="iconInfo">
              <MdOutlineMailOutline color="yellowgreen" />
              <p className="email">{profile.email}</p>
            </div>

            <div className="iconInfo">
              <LiaBirthdayCakeSolid color="yellowgreen" />
              <p className="cumple">{profile.date}</p>
            </div>

            <div className="iconInfo">
              <IoEarth color="yellowgreen" />
              <p className="pais">{profile.country}</p>
            </div>
          </>
        )}
      </div>
      <h1 style={{width: "70%", alignSelf: "center"}}>Posts</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%"}}>
        {dataPost.map((element, index) => (
          <div key={index} style={{display: "flex", flexDirection: "column", background: "white", borderRadius: "10px", gap: "20px", justifyContent: "center", alignItems: "center", padding: "20px"}} >
            <button onClick={deletePost}>Eliminar</button>
            <img src={element.archivo} alt="foto post" />
            <span>{element.titulo}</span>
            <span>{element.descripcion}</span>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}

export default UsuarioInfo;
