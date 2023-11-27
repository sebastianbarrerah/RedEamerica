import { doc, updateDoc, arrayUnion } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";

export const agregarPost = async (data, id) => {
  try {
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, {
      posts: arrayUnion(data)
    });
    console.log('Post agregado con éxito.');
    Swal.fire("Post agregado con éxito", "success");
  } catch (error) {
    console.error('Error al agregar el post:', error);
    Swal.fire("Hubo un error al ingresar el post", "error");
  }
};
