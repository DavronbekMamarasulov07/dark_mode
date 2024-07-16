import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppProvder from './context/app_provider/AppProvder.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvder>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvder>
)
