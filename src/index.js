import React from 'react'
import { render } from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import '@elevenia/master-ui/Theme/index.css';
import '@elevenia/master-ui/assets/index.css';
import 'assets/css/default.css';
import store from 'store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@elevenia/master-ui/Theme'
import GlobalStyles from '@elevenia/master-ui/Theme/globalStyles'
render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
