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
import AboutPage from "@/pages/AboutPage.tsx";
// import Body from "@/components/Body.tsx";
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import PostForm from "@/components/board/PostForm.tsx";
import PostPage from "@/pages/PostPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 ">
                <Routes>
                    <Route path="/posts/:id" element={<PostPage/>}/>
                    <Route path="/test" element={<PostForm/>}/>
                    <Route path="/" element={<AramiMain />} />
                    <Route path="/portfolio" element={<PortfolioBoard />} />
                    <Route path="/blog" element={<RssFeedInReact />} />
                    <Route path="/learn" element={<RssFeedViewer />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
)
