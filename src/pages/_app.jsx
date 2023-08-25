import React from 'react'
import { Provider } from 'react-redux'
import store from '@/utils/configureStore'


const Youtube = ({Component , pageProps}) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default Youtube