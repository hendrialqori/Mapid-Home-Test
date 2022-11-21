import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 'pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRvaTR4MHRzcTNibzhlNGUzYWNpNSJ9.oehlKj-dv7_LzzmhzVJcmg'
}

const tokeSlice = createSlice({
    name: 'token',
    initialState
})

export default tokeSlice.reducer