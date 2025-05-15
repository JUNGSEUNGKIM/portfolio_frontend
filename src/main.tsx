// import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import  AramiMain  from "@/pages/AramiMain.tsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioBoard from "@/pages/PortfolioBoard.tsx";
import RssFeedInReact from "@/pages/RssFeedInReact.tsx";
import RssFeedViewer from "@/pages/RssFeedViewer.tsx";
// import Body from "@/components/Body.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-1">
                <Routes>
                    <Route path="/" element={<AramiMain />} />
                    <Route path="/portfolio" element={<PortfolioBoard />} />
                    <Route path="/blog" element={<RssFeedInReact />} />
                    <Route path="/learn" element={<RssFeedViewer />} />

                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
)
