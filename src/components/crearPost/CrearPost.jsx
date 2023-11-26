import React from "react";
import "./CrearPost.scss";
import "../../components/loginAndRegister/RegAndLogForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const CrearPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <secction className="secCrearPost">
      <h2>Crear post</h2>
      <form
        action=""
        className="registerInputs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="inputError">
          {" "}
          <label>Título</label>
          <input
            type="text"
            placeholder="idk"
            name="titulo"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && (
            <span className="span">Debe ingresar el Título</span>
          )}
        </div>

        <div className="inputError">
          {" "}
          <label>Contenido</label>
          <input
            type="file"
            placeholder=""
            name="archivo"
            {...register("archivo", { required: true })}
          />
          {errors.archivo && (
            <span className="span">Debe seleccionar un archivo</span>
          )}
        </div>

        <div className="inputError">
          {" "}
          <label>Descripción</label>
          <input
            type="text"
            placeholder="Comparte tus ideas y conocimientos"
            name="descripcion"
            {...register("descripcion", { required: true })}
          />
          {errors.descripcion && (
            <span className="span">Debe ingresar el nombre</span>
          )}
        </div>

        <button type="submit">Publicar</button>
      </form>
    </secction>
  );
};

export default CrearPost;

/* import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image upload logic
    const file = e.target.files[0];
    setImage(file);
  };

  const handlePostSubmit = () => {
    // Upload image to Firebase Storage (assuming you have set up Firebase Storage)
    const storageRef = firebase.storage().ref(`images/${image.name}`);
    storageRef.put(image).then((snapshot) => {
      // Get the download URL for the image
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        // Save post data to Firebase Realtime Database
        firebase.database().ref("posts").push({
          title,
          description,
          imageUrl: downloadURL,
        });
      });
    });

    // Reset form fields
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />

      <label>Attach Image:</label>
      <input type="file" onChange={handleImageChange} />

      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default PostForm;
 */
