import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        penulis: "Penulis 1",
    },
    {
        id: 2,
        penulis: "Penulis 2",
        
    },
];

const users = createSlice({
    name : "user",
    initialState,
    reducers: {
    }
})

export default users.reducer;