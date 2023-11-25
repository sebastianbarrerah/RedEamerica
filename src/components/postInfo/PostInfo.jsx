import React from 'react';
import './postInfo.scss'
import { getUser } from '../../services/api/getUsers';
const PostInfo = () => {
    const nuevaData = getUser()
    console.log(nuevaData);
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