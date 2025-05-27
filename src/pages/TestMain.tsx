// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card.tsx";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import PostPreview from "@/components/board/PostPreview"
import { motion } from "framer-motion";
// import MainBody from "@/components/MainBody.tsx";
// import ResumeComponent from "@/components/ResumeComponent.tsx";
// import SplitFace from "@/components/SplitFace.tsx"

export default function TestMain() {
    // const skills = [
    //     { label: "Ps", level: "w-[95%]" },
    //     { label: "Ai", level: "w-[80%]" },
    //     { label: "Xd", level: "w-[65%]" },
    //     { label: "Dw", level: "w-[45%]" },
    // ];
    return (
        <div className="min-h-screen h-screen overflow-y-scroll snap-y snap-proximity
            sm:overflow-visible sm:snap-none sm:h-auto
            flex flex-col items-center justify-center">

            <section className="snap-start h-screen w-full flex flex-col justify-center items-center">
                <div
                    className="w-full max-w-full mx-auto text-center flex flex-col justify-center"
                    // initial={{opacity: 0, y: -50}}
                    // animate={{opacity: 1, y: 0}}
                    // transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}
                >
                    <div className="w-full h-2/5 text-black flex flex-col items-center p-6">
                        <div className="text-center mt-20 mb-28">
                            <div className="rounded-full border-2 px-4 py-1 mb-4 inline-block">
                                <p className="text-xs">PORTFOLIO</p>
                            </div>
                            <h1 className="text-5xl font-extrabold">I'M TEST</h1>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="w-full flex items-center">
                                <div className="flex-grow border-t border-gray-300 mr-6"></div>
                                <span className="mx-4 text-xl font-semibold text-gray-500">Skills & Competencies</span>
                                <div className="flex-grow border-t border-gray-300 ml-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="snap-start h-screen w-full flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen text-sm font-sans rounded-2xl md:mx-8 mx-1">
                    <aside className="text-black flex flex-col items-center md:items-center">
                        <div className="text-black w-full md:w-auto md:h-full text-center md:text-center flex flex-col justify-between">
                            <div className="h-36" />
                            <div className="items-center flex-grow">
                                <div className="mb-16 flex justify-center">
                                    <img src="/profile.jpg" alt="profile" className="rounded-full w-28 h-28 object-cover border-2 border-white" />
                                </div>
                                <div className="text-4xl font-extrabold mb-3 w-full">JUNGSEUNG</div>
                                <p className="text-2xl font-extrabold">김정승</p>
                                <div className="flex justify-center my-8">
                                    <div className="border-t-4 border-gray-500 w-10" />
                                </div>
                                <div className="space-y-4 mb-6">
                                    <p>010-5428-5284</p>
                                    <p>kimjs5284@daum.net</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <main className="md:col-span-4 text-gray-400 p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    </main>
                </div>
            </section>

            <section className="snap-start h-screen w-full flex flex-col justify-center items-center">
                {/*<motion.div*/}
                {/*    className="w-full h-auto block p-6"*/}
                {/*    initial={{ opacity: 0 }}*/}
                {/*    animate={{ opacity: 1 }}*/}
                {/*    transition={{ delay: 1.5, duration: 0.8 }}*/}
                {/*>*/}
                    <div className="flex items-center justify-center w-full">
                        <div className="w-full flex items-center">
                            <div className="flex-grow border-t border-gray-300 mr-6"></div>
                            <span className="mx-4 text-xl font-semibold text-gray-500">Skills & Competencies</span>
                            <div className="flex-grow border-t border-gray-300 ml-6"></div>
                        </div>
                    </div>
                {/*</motion.div>*/}
            </section>

            <section className="snap-start h-screen w-full flex flex-col justify-center items-center">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-white"
                    // initial={{opacity: 0, y: -50}}
                    // animate={{opacity: 1, y: 0}}
                    // transition={{delay: 2.0, duration: 0.8, ease: "easeOut"}}
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
                </div>
            </section>
        </div>
    );
}

