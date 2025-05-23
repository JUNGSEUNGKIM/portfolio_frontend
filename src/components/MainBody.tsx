// import { useState } from "react";

const MainBody = () => {
    // const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    return (
        <section className="relative w-full h-1/5 overflow-hidden ">
            <div className="w-full h-2/5 text-black flex flex-col items-center p-6">
                {/*bg-gradient-to-b from-black via-gray-800 to-gray-800">*/}
                {/*<div className="absolute top-6 left-6 text-sm">*/}
                {/*    <p>CONTACT</p>*/}
                {/*    <p>+82 - 10 - 1234 - 5678</p>*/}
                {/*    <p>miri@miri.com</p>*/}
                {/*</div>*/}

                <div className="text-center mt-20 mb-28">
                    <div className="rounded-full border-2 px-4 py-1 mb-4 inline-block">
                        <p className="text-xs">PORTFOLIO</p>
                        {/*<p className="text-xs font-bold">JEON MIRI</p>*/}
                    </div>
                    <h1 className="text-5xl font-extrabold">I'M HERE!</h1>
                    {/*<p className="italic font-handwriting text-xl mt-2">Were you looking for me?</p>*/}
                </div>

                <div className="flex items-center justify-center w-full ">
                    <div className="w-full  flex items-center">
                        <div className="flex-grow border-t border-gray-300 mr-6 "></div>
                        <span className="mx-4 text-xl font-semibold text-gray-500 ">Skills & Competencies</span>
                        <div className="flex-grow border-t border-gray-300 ml-6 "></div>
                    </div>
                </div>

                {/*<div className="text-center mb-4">*/}
                {/*    <p className="text-sm tracking-wide">2030 ~ 2035</p>*/}
                {/*</div>*/}
            </div>


        </section>
    );
};

export default MainBody;
