import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

// se agrega un nuevo usuario con el uid que se agrego en la autencticacion
export const addUsers = async (data, id) => {
  try {
    await setDoc(doc(db, "users", id), data);
    console.log("Usuario agregado a Firestore con UID:", id);
  } catch (error) {
    console.error("Error al agregar usuario a Firestore:", error);
    throw error;
  }
};
