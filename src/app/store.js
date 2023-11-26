import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import idReducer from '../features/id/idSlice';
export const store = configureStore({
    reducer: {
        userLogin: loginReducer,
        userId: idReducer,
    }
})  

