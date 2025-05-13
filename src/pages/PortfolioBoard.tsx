// import React from "react";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card.tsx";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SplitFace from "@/components/SplitFace.tsx"
import {useState} from "react";

export default function PortfolioBoard() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-6">
            <motion.div
                className="w-full max-w mx-auto text-center max-h-[60vh] sm:max-h-[10vh] md:max-h-[30vh] lg:max-h-[60vh] flex flex-col justify-center"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
            >
                {/*<h1 className="text-5xl md:text-7xl font-bold mb-4">{"Hi, I'm JUNGSEUNG"}</h1>*/}
                {/*<p className="text-lg md:text-2xl mb-6 text-gray-300 max-w-2xl mx-auto">*/}
                {/*    A passionate full-stack developer with a knack for crafting clean and scalable code.*/}
                {/*</p>*/}
                {/*<div className="flex justify-center gap-4 mb-8">*/}
                {/*    <a href="https://github.com/JUNGSEUNGKIM" target="_blank" rel="noopener noreferrer">*/}
                {/*        <FaGithub className="w-6 h-6 hover:text-teal-400" />*/}
                {/*    </a>*/}
                {/*    <a href="https://www.linkedin.com/in/js-kim-884a7432a/" target="_blank" rel="noopener noreferrer">*/}
                {/*        <FaLinkedin className="w-6 h-6 hover:text-blue-400" />*/}
                {/*    </a>*/}
                {/*    <a href="mailto:kimjs5284@daum.net">*/}
                {/*        <FaEnvelope className="w-6 h-6 hover:text-pink-400" />*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition-transform">*/}
                {/*    View My Work*/}
                {/*</Button>*/}
                <SplitFace/>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-7xl text-white"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
            >
                <ExpandableCard
                    image="/3.png"
                    title="My UI design book"
                    category="Book"
                    description="Quick and practical UI design guidelines to create intuitive and beautiful interfaces."
                />
                <ExpandableCard
                    image="/3.png"
                    title="Creating a lean design system"
                    category="Design system"
                    description="Comprehensive guidance on setting up a lean and efficient design system that scales beautifully across teams."
                />
                <ExpandableCard
                    image="/3.png"
                    title="Interior design news feed"
                    category="Side project"
                    description="et the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cGet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, costs, and practical tips."
                />


                {/*<Card className="bg-white rounded-2xl shadow hover:shadow-lg transition w-full max-w-sm mx-auto">*/}
                {/*    <img*/}
                {/*        src="/3.png"*/}
                {/*        alt="My UI design book"*/}
                {/*        className="w-full h-48 object-cover rounded-t-2xl"*/}
                {/*    />*/}
                {/*    <CardContent className="p-1">*/}
                {/*        <h3 className="text-lg font-semibold mb-1">My UI design book</h3>*/}
                {/*        <p className="text-gray-500 text-sm ">Book</p>*/}
                {/*        <p className="text-gray-600 text-sm">Quick and practical UI design guidelines to create intuitive and beautiful interfaces.</p>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

                {/*<Card className="bg-white rounded-2xl shadow hover:shadow-lg transition w-full max-w-sm mx-auto">*/}
                {/*    <img*/}
                {/*        src="/3.png"*/}
                {/*        alt="Creating a lean design system"*/}
                {/*        className="w-full h-48 object-cover rounded-t-2xl"*/}
                {/*    />*/}
                {/*    <CardContent className="p-6">*/}
                {/*        <h3 className="text-lg font-semibold mb-1">Creating a lean design system</h3>*/}
                {/*        <p className="text-gray-500 text-sm mb-4">Design system</p>*/}
                {/*        <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">*/}
                {/*            <div className="flex items-center space-x-2">*/}
                {/*                <img src="/1.png" alt="Canberra" className="w-8 h-8" />*/}
                {/*                <span className="text-sm font-medium">1.52</span>*/}
                {/*            </div>*/}
                {/*            <div className="flex items-center space-x-2">*/}
                {/*                <img src="/1.png" alt="South" className="w-8 h-8" />*/}
                {/*                <span className="text-sm font-medium">2.32</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

                {/*<Card className="bg-white rounded-2xl shadow hover:shadow-lg transition w-full max-w-sm mx-auto">*/}
                {/*    <img*/}
                {/*        src="/3.png"*/}
                {/*        alt="Interior design news feed"*/}
                {/*        className="w-full h-48 object-cover rounded-t-2xl"*/}
                {/*    />*/}
                {/*    <CardContent className="p-6">*/}
                {/*        <h3 className="text-lg font-semibold mb-1">Interior design news feed</h3>*/}
                {/*        <p className="text-gray-500 text-sm mb-4">Side project</p>*/}
                {/*        <div className="bg-white rounded-lg p-3 shadow flex items-center space-x-3">*/}
                {/*            <img*/}
                {/*                src="/1.png"*/}
                {/*                alt="Remodelista"*/}
                {/*                className="w-12 h-12 rounded"*/}
                {/*            />*/}
                {/*            <div className="flex-1">*/}
                {/*                <p className="text-sm font-medium">*/}
                {/*                    What today’s home buyer wants from their renovation*/}
                {/*                </p>*/}
                {/*                <p className="text-xs text-gray-400">2 mins ago · remodelista.com</p>*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col items-center">*/}
                {/*                <span className="text-xs text-gray-400 mb-1">123 ❤️</span>*/}
                {/*                <span className="text-xs text-gray-400">11 💬</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </CardContent>*/}
                {/*</Card>*/}

            </motion.div>
        </div>

    );
}

interface ExpandableCardProps {
    image: string;
    title: string;
    category: string;
    description: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({image, title, category, description}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            className="bg-white rounded-2xl shadow hover:shadow-lg transition w-full max-w-sm mx-auto cursor-pointer"
            onClick={() => setExpanded(!expanded)}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover rounded-2xl shadow"
            />
            <CardContent
                className={`px-4 transition-all duration-300 ${expanded ? "max-h-[500px]" : "max-h-28 overflow-hidden"}`}>
                <p className="text-lg mb-1 text-black">{title}</p>
                <p className="text-gray-500 text-sm mb-2">{category}</p>
                <p className={`text-gray-600 text-sm ${expanded ? "" : "line-clamp-3"}`}>
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};