import { Contents, Sidebar, Navbar } from '@/components'
import './globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from '@/slices'
import { Provider } from 'react-redux'

const index = () => {
    const rootReducer = {
        theme: themeReducer,
    }

    const store = configureStore({
        reducer: rootReducer
    })

    return (
        <Provider store={store}>
            <Navbar />
            <Sidebar />
            <Contents />
        </Provider>
    )
}

export default index