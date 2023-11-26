import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { idUser } from '../features/id/idSlice';
import { loginState } from '../features/login/loginSlice';
import Swal from 'sweetalert2';

export const loginUsers = (data) => {
    return async (dispatch) => {
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        if (auth.currentUser) {
          dispatch(idUser(auth.currentUser.uid)); 
          dispatch(loginState(true));
          Swal.fire("Bienvenido", "Inicio de sesión exitoso", "success");
        } else {
            console.log("Error al iniciar sesión. Usuario o contraseña incorrectos.");
          Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error.message);
        Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
        throw error;
    }
};
};

export const closeSession = () => {
    return async (dispatch) => {
      try {
        await signOut(auth);
        dispatch(loginState(false));
        Swal.fire("Cierre exitoso", "Vuelve pronto", "success");
      } catch (error) {
        console.log(error);
        Swal.fire("Error", "Hubo algún error, inténtalo nuevamente", "error");
      }
    };
  };

