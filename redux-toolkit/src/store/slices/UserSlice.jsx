import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "User",
    initialState: [],

    reducers: {
        adduser(state, actions) {
            state.push(actions.payload);
        },
        removeUser(state, actions) {
            state.splice(actions.payload, 1)
        },
        clearuser(state, actions) {
            return [];
        }
    }
})

export default UserSlice.reducer ;
export const {adduser, removeUser, clearuser} = UserSlice.actions;