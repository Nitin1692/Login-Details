import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        login: []
    },
    reducers: {
        createLogin: (state, action) => {
            state.login.push(action.payload);
        }
    }
})

export default loginSlice.reducer;

export const {createLogin} = loginSlice.actions;