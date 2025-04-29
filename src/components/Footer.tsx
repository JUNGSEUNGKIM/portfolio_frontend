function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2025 Jungseung. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="https://github.com/JUNGSEUNGKIM" target="_blank" className="hover:underline">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/js-kim-884a7432a/" target="_blank" className="hover:underline">
                        LinkedIn
                    </a>
                    <a href="mailto:kimjs5284@daum.net" className="hover:underline">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
