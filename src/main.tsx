import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import  AramiMain  from "@/pages/AramiMain.tsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Body from "@/components/Body.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <AramiMain />
            </main>
            <Footer />
        </div>
    </StrictMode>
)
