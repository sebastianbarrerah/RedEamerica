import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/routes/Router.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
     <Router />
 </Provider>
)
