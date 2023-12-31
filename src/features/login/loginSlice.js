import { createSlice } from '@reduxjs/toolkit';
const loginSlice = createSlice({
    name: "userLogin",
    initialState: false,
    reducers: {
        loginState: (state, action) => {
            return action.payload;
        },
    }
})

export const { loginState, idUser } = loginSlice.actions;
export default loginSlice.reducer

