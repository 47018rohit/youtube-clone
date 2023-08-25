import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
    name : 'video',
    initialState: {},
    reducers:{
        setVideoData : (data , action)=>{
            return action.payload
        }
    }
})

export const { setVideoData} = videoSlice.actions
export default videoSlice.reducer