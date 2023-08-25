import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, toggleReducer , menuReducer, contentReducer, videoReducer} from '@/slices'

const rootReducer = {
    theme: themeReducer,
    toggleSidebar: toggleReducer,
    menuSelected: menuReducer,
    content: contentReducer,
    video: videoReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store