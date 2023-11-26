import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// traer todos los usuarios
export const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userData = querySnapshot.docs.map((doc) => doc.data());
    return userData;
};

// traer un solo usuario por su id
export const getUniqueUser = async (id) => {
    const userDocRef = doc(db, "users", id);
    const userDocSnapshot = await getDoc(userDocRef);
    
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      return userData;
    } else {
      console.log("El usuario con el ID", id, "no existe.");
      return null;
    }
  };

