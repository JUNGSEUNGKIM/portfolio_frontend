import React, { useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <a href="#about" className="hover:text-gray-400">about</a>
                    <a href="#learn" className="hover:text-gray-400">learn</a>
                    <Link to="/portfolio" className="hover:text-gray-400">portfolio</Link>
                    <a href="#blog" className="hover:text-gray-400">blog</a>
                    <a href="#contact" className="hover:text-gray-400">contact</a>
                </nav>

                {/* Right: Social Icons (Desktop) */}
                <div className="hidden md:flex space-x-6 text-3xl">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><i className="fab fa-facebook"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400"><i className="fab fa-instagram"></i></a>
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
                    <a href="#about" className="block hover:text-gray-400">about</a>
                    <a href="#learn" className="block hover:text-gray-400">learn</a>
                    <a href="#portfolio" className="block hover:text-gray-400">portfolio</a>
                    <a href="#blog" className="block hover:text-gray-400">blog</a>
                    <a href="#contact" className="block hover:text-gray-400">contact</a>
                </div>
            )}
        </motion.div>
    );
};

export default Header;
