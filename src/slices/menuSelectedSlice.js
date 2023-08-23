import { createSlice } from "@reduxjs/toolkit";

const menuSelectedSlice = createSlice({
    name: 'menuSelected',
    initialState: 'home',
    reducers:{
        setMenuSelected : (state, action)=>{
            return action.payload
        }
    }
})

export const {setMenuSelected} = menuSelectedSlice.actions
export default menuSelectedSlice.reducer