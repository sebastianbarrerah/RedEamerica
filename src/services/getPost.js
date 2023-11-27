import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase';

export const getPost = async(id) => {
    const querySnapshot = await getDocs(collection(db, "users", id, "posts"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
}