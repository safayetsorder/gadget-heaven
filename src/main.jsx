// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MainContext from './context/MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainContext>

      <App />
    </MainContext>
    <ToastContainer></ToastContainer>
  </BrowserRouter>


  // <StrictMode>

  // </StrictMode>
)
