import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const addUsers = async(data, id) => {
  try {
    const docRef = await setDoc(doc(db, "users", id), data);
    console.log(docRef);
      console.log(id, "este es el id de auth");
  } catch (error) {
    console.log(error, "hubo algun error");
  }
};
