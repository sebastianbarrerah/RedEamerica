import { createSlice } from '@reduxjs/toolkit';
const idSlice = createSlice({
    name: "userId",
    initialState: null,
    reducers: {
        idUser: (state, action) => {
             state = action.payload;
        }
    }
})

export const { idUser } = idSlice.actions;
export default idSlice.reducer

