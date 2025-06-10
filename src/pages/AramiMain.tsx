// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card.tsx";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import PostPreview from "@/components/board/PostPreview"
import { motion } from "framer-motion";
import MainBody from "@/components/MainBody.tsx";
import ResumeComponent from "@/components/ResumeComponent.tsx";
// import SplitFace from "@/components/SplitFace.tsx"

export default function AramiMain() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center ">
            <motion.div
                className="w-full max-w-full mx-auto text-center

                flex flex-col justify-center"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
                >
                {/*<SplitFace/>*/}
                <MainBody/>
                {/*<ResumeComponent/>*/}

            </motion.div>
            {/*<motion.div*/}
            {/*    className="w-full max-w-full mx-auto text-center*/}

            {/*     flex flex-col justify-center"*/}
            {/*    initial={{opacity: 0, y: -50}}*/}
            {/*    animate={{opacity: 1, y: 0}}*/}
            {/*    transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}*/}
            {/*>*/}
            {/*    /!*<SplitFace/>*!/*/}
            {/*    <ResumeComponent/>*/}

            {/*</motion.div>*/}
            <motion.div
                className="w-full h-auto block p-6 my-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >

                <div className="flex items-center justify-center w-full ">
                    <div className="w-full  flex items-center">
                        <div className="flex-grow border-t border-gray-300 mr-6 "></div>
                        <span className="mx-4 text-xl font-semibold text-gray-500 ">Skills & Competencies</span>
                        <div className="flex-grow border-t border-gray-300 ml-6 "></div>
                    </div>
                </div>
            </motion.div>


            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8  w-full text-white"
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 2.0, duration: 0.8, ease: "easeOut"}}
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

