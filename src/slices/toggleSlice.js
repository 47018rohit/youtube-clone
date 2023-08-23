const { createSlice } = require("@reduxjs/toolkit");


const toggleSlice = createSlice({
    name: 'toggleSidebar',
    initialState: true,
    reducers: {
        setToggleSidebar: state=> !state
    }
})

export const {setToggleSidebar} = toggleSlice.actions
export default toggleSlice.reducer