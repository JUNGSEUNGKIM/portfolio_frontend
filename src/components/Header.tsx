import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import {API_BASE_URL} from "@/config.ts";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("준비중입니다");
    };
    const [count, setCount] = useState({ total: 0, today: 0 });
    useEffect(() => {
        fetch(`${API_BASE_URL}/visitor/count`)
            .then(res => res.json())
            .then(data => setCount(data));
    }, []);

    return (
        <motion.div
            className=" top-0 left-0 w-full bg-black text-white z-50 px-6 py-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Left: Logo */}
                <a href="/" className="flex items-center space-x-2">
                    <img src="/logo_rect.png" alt="Logo" className="w-16 h-16 object-contain" />
                    <span className="sr-only">Home</span>
                </a>

                {/* Center: Navigation (Desktop) */}
                <nav className="hidden md:flex space-x-10 text-lg font-light">
                    <Link to="/about" onClick={handleClick} className="hover:text-gray-400">about</Link>
                    <Link to="/learn" className="hover:text-gray-400">learn</Link>
                    <Link to="/portfolio" onClick={handleClick} className="hover:text-gray-400">portfolio</Link>
                    <Link to="/contact" className="hover:text-gray-400">contact</Link>
                    {/*<Link to="/blog" className="hover:text-gray-400">blog</Link>*/}
                    {/*<a href="#contact" className="hover:text-gray-400">contact</a>*/}
                </nav>

                {/* Right: Social Icons (Desktop) */}
                {/* Right: Social Icons (Desktop) */}
                <div className="hidden md:flex space-x-2 text-3xl w-16 gap-4">
                    <a href="https://github.com/JUNGSEUNGKIM" target="_blank" rel="noreferrer"
                       className="group relative w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-white border border-gray-800 transition-colors">
                        <i className="fab fa-github text-white group-hover:text-gray-800"></i>
                    </a>
                    {/*<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">*/}
                    {/*    <i className="fab fa-linkedin"></i>*/}
                    {/*</a>*/}
                    <a href="https://www.instagram.com/perghost/" target="_blank" rel="noreferrer" className="hover:text-pink-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                    {/*<a href="https://www.notion.so/your-notion-page" target="_blank" rel="noreferrer" className="hover:text-black">*/}
                    {/*    <i className="fas fa-file-alt"></i>*/}
                    {/*</a>*/}

                    <div className="text-sm opacity-50">
                        {count&&(
                            <div className="text-xs text-gray-300 flex flex-col gap-1">
                                <div className="flex flex-row gap-2">👤 <span className="font-medium text-green-400">{count.today}</span> today</div>
                                {/*<span className="mx-1">•</span>*/}
                                <div className="flex flex-row gap-2">🌍 <span className="font-medium text-blue-400">{count.total}</span> total</div>
                            </div>
                        )}


                    </div>
                </div>


                {/* Hamburger Icon (Mobile) */}
                <button
                    className="block md:hidden focus:outline-none text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2 text-lg">
                    <Link
                        to="/about"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("준비중입니다");
                            setMenuOpen(!menuOpen);
                        }}
                        className="block hover:text-gray-400"
                    >
                        about
                    </Link>
                    <Link to="/learn" onClick={() => setMenuOpen(!menuOpen)} className="block hover:text-gray-400">learn</Link>
                    <Link to="/portfolio" onClick={(e) => {
                        e.preventDefault();
                        alert("준비중입니다");
                        setMenuOpen(!menuOpen);
                    }} className="block hover:text-gray-400">portfolio</Link>
                    {/*<Link to="/blog" onClick={() => setMenuOpen(!menuOpen)} className="block hover:text-gray-400">blog</Link>*/}
                    <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)} className="block hover:text-gray-400">contact</Link>
                </div>
            )}
        </motion.div>
    );
};

export default Header;
