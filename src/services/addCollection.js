import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase/firebase";
import { addUsers } from "./addUsers";

// Se agrega a la colleccion y se guarda el id del usuario para añadirlo con ese mismo a la bd de firestore
export const addCollection = async (data) => {
    try {
      const authResult = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const uid = authResult.user.uid;
      await addUsers(data, uid);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };