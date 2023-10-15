import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './tools/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* on appelle notre store */}
    <Provider store={store}>
      {/* on appelle le router pour gérer les url */}
      <RouterProvider router={Router}>

      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
