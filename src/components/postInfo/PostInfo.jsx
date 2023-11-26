import React, { useEffect } from "react";
import "./postInfo.scss";
import { GetData } from "../../services/getUser";
import ImgPost from "../../assets/pride-month-picture.jpg";

const PostInfo = () => {
  useEffect(async () => {
    const data = await GetData();
    console.log(data);
    if (data) {
      console.log("esto es data", data);
    } else {
      console.log("error");
    }
  }, []);

  return (
    <div className="container__postInformacionn">
      <section className="container__postInformacion">
        <div className="container__personal">
          <figure className="img__informacion">
            <img
              src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg"
              alt=""
              className="foto__informacion"
            />
          </figure>
          <span className="informacion__name">Juan Florez</span>
          <span className="informacion__pais">Colombia</span>
        </div>
        <article className="file__info">
          <figure className="file__container">
            <img className="file__img" src={ImgPost} alt="" />
          </figure>
        </article>
      </section>
    </div>
  );
};

export default PostInfo;
