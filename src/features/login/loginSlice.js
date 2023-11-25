import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: "userLogin",
    initialState: false,
    reducers: {
        loginEstate: (state, action) => {
            state = action.payload;
        }
    }
})

export const { loginEstate } = loginSlice.actions;
export default loginSlice.reducer

