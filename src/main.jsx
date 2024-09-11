import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <div className="max-w-screen-xl mx-auto">
    <App />
   </div>
   
  </StrictMode>,
)
