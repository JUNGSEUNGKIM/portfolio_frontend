import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import  AramiMain  from "@/pages/AramiMain.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AramiMain/>
  </StrictMode>,

)
