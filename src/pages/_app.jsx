import React from 'react'
import { Provider } from 'react-redux'
import store from '@/utils/configureStore'
import RootLayout from '@/app/layout'


const Youtube = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <RootLayout >
                <Component {...pageProps} />
            </RootLayout>
        </Provider>
    )
}

export default Youtube