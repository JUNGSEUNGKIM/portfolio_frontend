import React from "react";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-black text-white z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Left: Logo */}
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-3xl font-bold">
                        {/* 여기에 로고 이미지로 대체해도 되고, 텍스트로 해도 돼 */}
                        <span className="sr-only">Home</span>
                        <img
                            src="/logo.png"
                            alt=""
                            className="w-10 h-10 object-contain"
                        />
                    </a>
                </div>

                {/* Center: Navigation */}
                <nav className="flex space-x-8 text-lg">
                    <a href="#about" className="hover:text-gray-400">
                        about
                    </a>
                    <a href="#learn" className="hover:text-gray-400">
                        learn
                    </a>
                    <a href="#portfolio" className="hover:text-gray-400">
                        portfolio
                    </a>
                    <a href="#blog" className="hover:text-gray-400">
                        blog
                    </a>
                    <a href="#contact" className="hover:text-gray-400">
                        contact
                    </a>
                </nav>

                {/* Right: Social Icons */}
                <div className="flex space-x-4 text-xl">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
