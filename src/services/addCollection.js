import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { addUsers } from "./addUsers";

export const addCollection = async(data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password);
    let id = auth.currentUser.uid

   await addUsers(data, id)
}