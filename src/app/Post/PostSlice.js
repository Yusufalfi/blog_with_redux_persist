import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const posts = createSlice({
    name : "post",
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.push(action.payload)
        },
        editPosts: (state, action) => {
            const {id, title, content} = action.payload;
            const existingUser = state.find(post => post.id === id);
            if(existingUser) {
                existingUser.title = title;
                existingUser.content = content;
            }
        }, 
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const existingUser = state.find(post => post.id === id);
            if(existingUser) {
                return state.filter(post => post.id !==id)
            }

        }
    },
})
export const {addPosts, editPosts, deleteUser} = posts.actions;

export default posts.reducer;