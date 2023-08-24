import { Contents, Sidebar, Navbar } from '@/components'
import './globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, toggleReducer , menuReducer, contentReducer} from '@/slices'
import { Provider } from 'react-redux'
import { Box } from '@mui/material'

const index = () => {
    const rootReducer = {
        theme: themeReducer,
        toggleSidebar: toggleReducer,
        menuSelected: menuReducer,
        content: contentReducer
    }

    const store = configureStore({
        reducer: rootReducer
    })

    return (
        <Provider store={store}>
            <Navbar />
            <Box sx={{display: 'flex' }}>
                <Sidebar />
                <Contents />
            </Box>
        </Provider>
    )
}

export default index