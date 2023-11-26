import React, { useEffect, useState} from 'react';
import './postInfo.scss'
import { getData, getUniqueUser } from '../../services/getUser';
import { getPost } from '../../services/getPost';

const PostInfo = () => {
const [info, setInfo] = useState([])
const [id, setId] = useState("FD70TsZGNJUM2GTOnM97C6mG5Zi1")

useEffect(() => {
    const fetchData = async () => {
        try {
          const data = await getUniqueUser(id);
          setInfo(data);
          console.log("Estado actualizado:", data);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      };
    fetchData();
  }, []);
  console.log(info.posts)

    return(
        <section className="container__postInformacion">
            <div className="container__personal">
                <figure className='img__informacion'>
                    <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg" alt="" className="foto__informacion" />    
                </figure>
                <span className='informacion__name'>Juan perez</span>
                <span className='informacion__pais'>Colombia</span>
            </div>
            <article className="file__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vero aut expedita aspernatur earum qui eveniet ut mollitia inventore, praesentium asperiores, tenetur repudiandae at quaerat, consectetur nulla? Porro veniam, distinctio id asperiores, ducimus architecto pariatur rem adipisci eius, nobis unde?</article>
        </section>
    )
}

export default PostInfo;