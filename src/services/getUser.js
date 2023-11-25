import { collection, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

export const GetData = async() => {
    try {
        const docRef = await getDoc(db, users);
        const data = await docRef.json()
        console.log(data);
        return data
        
    } catch (error) {
        console.log(error.code);
    }
}