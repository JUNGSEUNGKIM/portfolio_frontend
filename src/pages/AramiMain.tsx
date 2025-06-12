// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card.tsx";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import PostPreview from "@/components/board/PostPreview"
import { motion } from "framer-motion";
import MainBody from "@/components/MainBody.tsx";
// import ResumeComponent from "@/components/ResumeComponent.tsx";
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

        </div>
    );
}

