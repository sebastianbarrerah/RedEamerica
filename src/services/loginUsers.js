import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'
import { idUser } from '../features/id/idSlice'

export const loginUsers = (data) => {
    return async(dispatch) => {
        try {
            signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(auth.currentUser);
            dispatch(idUser(auth.currentUser))
        } catch (error) {
            console.log(error, "Error al crear usuario en la contraseña o correo");
        }
    }
}