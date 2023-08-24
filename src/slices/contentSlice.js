import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: 'content',
    initialState: [],
    reducers:{
        setContent: (data , action)=>{
            return action.payload
        } 
    }
})

export const {setContent} = contentSlice.actions
export default contentSlice.reducer