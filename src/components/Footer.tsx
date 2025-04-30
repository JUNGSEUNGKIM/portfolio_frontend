function Footer() {
    return (
        <footer className="relative bg-gray-100 text-gray-600 pt-10 mt-20">
            {/* 위로 스크롤 버튼 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl transition-transform duration-300 hover:scale-110 border border-gray-200"
                >
                    ▲
                </button>
            </div>

            {/* 하단 내용 */}
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm">&copy; 2025 JUNGSEUNG ARAMI </div>
                <nav className="flex space-x-6 text-sm mt-4 md:mt-0">
                    <a href="#about" className="hover:text-black">about</a>
                    <a href="#learn" className="hover:text-black">learn</a>
                    <a href="#portfolio" className="hover:text-black">portfolio</a>
                    <a href="#blog" className="hover:text-black">blog</a>
                    <a href="#contact" className="hover:text-black">contact</a>
                </nav>
            </div>
        </footer>

    );
}

export default Footer;
