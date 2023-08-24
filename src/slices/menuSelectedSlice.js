import { createSlice } from "@reduxjs/toolkit";

const menuSelectedSlice = createSlice({
    name: 'menuSelected',
    initialState: 'home',
    reducers:{
        setMenuSelected : (data, action)=>{
            return action.payload
        }
    }
})

export const {setMenuSelected} = menuSelectedSlice.actions
export default menuSelectedSlice.reducer