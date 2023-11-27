import { arrayRemove, doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";


export const removePost = async (dataPost, id) => {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        posts: arrayRemove(dataPost[0])
      });
      console.log('Post eliminado con éxito.');
      Swal.fire("Post eliminado con exito", "success");
    } catch (error) {
      console.error('Error al eliminar el post:', error);
      Swal.fire("Error al eliminar el post", "error");
      throw error;
    }
  };