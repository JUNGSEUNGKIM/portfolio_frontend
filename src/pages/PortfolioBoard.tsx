// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card.tsx";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SplitFace from "@/components/SplitFace.tsx"
import PostPreview from "@/components/board/PostPreview.tsx";
// import {useState} from "react";

export default function PortfolioBoard() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-6">
            <motion.div
                className="w-full max-w mx-auto text-center max-h-[60vh] sm:max-h-[10vh] md:max-h-[30vh] lg:max-h-[60vh] flex flex-col justify-center"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
            >
                <SplitFace/>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8  max-w-7xl text-white"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
            >
                <PostPreview
                    image="/3.png"
                    title="My UI design book"
                    category="Book"
                    description="Quick and practical UI design guidelines to create intuitive and beautiful interfaces."
                />
                <PostPreview
                    image="/3.png"
                    title="Creating a lean design system"
                    category="Design system"
                    description="Comprehensive guidance on setting up a lean and efficient design system that scales beautifully across teams."
                />
                <PostPreview
                    image="/3.png"
                    title="Interior design news feed"
                    category="Side project"
                    description="et the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, cGet the latest insights and articles on what today’s home buyer wants from their renovation, covering trends, costs, and practical tips."
                />
            </motion.div>
        </div>

    );
}
