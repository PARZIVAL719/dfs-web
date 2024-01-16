import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DoctorDetailState from './components/globalState/DoctorDetailState.jsx'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DoctorDetailState>
    <App />
  </DoctorDetailState>
  </BrowserRouter>,
)
