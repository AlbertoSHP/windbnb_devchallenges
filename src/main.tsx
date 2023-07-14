import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WindbnbApp } from './WindbnbApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WindbnbApp />
    </BrowserRouter>
  </React.StrictMode>,
)