// import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AramiMain() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-6">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">{"Hi, I'm JUNGSEUNG"}</h1>
                <p className="text-lg md:text-2xl mb-6 text-gray-300 max-w-2xl mx-auto">
                    A passionate full-stack developer with a knack for crafting clean and scalable code.
                </p>
                <div className="flex justify-center gap-4 mb-8">
                    <a href="https://github.com/JUNGSEUNGKIM" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-6 h-6 hover:text-teal-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/js-kim-884a7432a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
                    </a>
                    <a href="mailto:kimjs5284@daum.net">
                        <FaEnvelope className="w-6 h-6 hover:text-pink-400" />
                    </a>
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition-transform">
                    View My Work
                </Button>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-5xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Frontend</h2>
                        <p className="text-gray-400">React, TypeScript, Tailwind CSS, Vite</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Backend</h2>
                        <p className="text-gray-400">NestJS, PostgreSQL, Docker, CI/CD</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                        <p className="text-gray-400">Personal portfolio, Admin dashboard, Kiosk system</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                        <p className="text-gray-400">Java, Python, FastAPI, WebSocket, Nginx</p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
