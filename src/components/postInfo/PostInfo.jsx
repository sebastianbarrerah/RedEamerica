import React, { useEffect, useState} from 'react';
import './postInfo.scss'
import { useLocation } from 'react-router';
import PostComment from '../postComment/PostComment';
import foto from '../../assets/images/imgPerfil.png'

const PostInfo = () => {
  const location = useLocation()
  const [dataUser, setDataUser] = useState()
  const [dataPost, setDataPost] = useState()

  useEffect(() => {
    if(location.state){
      console.log(location.state,"esto lo de location");
      const infoPersonal = location.state;
      const infoPosts = location.state.posts;
      setDataUser(infoPersonal)
      setDataPost(infoPosts)
    }
  }, [])

  console.log("esto es personal", dataUser);
  console.log("esto es post", dataPost);
    return( 
        <section className="container__postInformacion">
            <div className="container__personal">
                <figure className='img__informacion'>
                    <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg" alt="Foto personal" className="foto__informacion" />    
                </figure>
                <span className='informacion__name'>{dataUser? dataUser.name: "Usuario"}</span>
                <span className='informacion__pais'>{dataUser? dataUser.country: "Usuario"}</span>
            </div>
            <img className="file__info" src={dataPost? dataPost.archivo: foto}/>
            <PostComment dataPost={dataPost}/>
        </section>
    )
}
export default PostInfo;
