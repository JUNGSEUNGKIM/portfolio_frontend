// import { useState } from "react";


const MainBody = () => {
    // const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    return (
        <section className="relative w-full  ">
            <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6 text-black">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">안녕하세요</h1>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">백엔드 개발자를 희망하는 <span className="text-blue-600">김정승</span>입니다.</h2>

                <p className="max-w-2xl mt-4 leading-relaxed text-gray-700">
                    Java를 기반으로 JavaScript와 Python까지<br />
                    다양한 언어로 백엔드를 설계하고 배포해왔습니다.
                </p>
                <p className="max-w-2xl mt-4 leading-relaxed text-gray-700">
                    현재는 NestJS 기반의 서비스 백엔드를 구축하고 있으며,<br />
                    SI 프로젝트에서는 Spring 기반 시스템의 고도화를 맡고 있습니다.
                </p>
                <p className="max-w-2xl mt-4 leading-relaxed text-gray-700">
                    아직 부족한 점도 많지만, 성장하는 개발자가 되기 위해 매일 노력하고 있습니다.<br />
                    저를 찾아주신다면, 기술 그 이상의 가치를 드릴 수 있도록 준비하겠습니다.
                </p>

                <p className="mt-6 text-sm text-gray-500">감사합니다 :)</p>
                <div className="mt-auto w-full">
                    <div className="w-full flex items-center">
                        <div className="flex-grow border-t border-gray-300 mr-6"></div>
                        <span className="mx-4 text-xl font-semibold text-gray-500">Skills & Competencies</span>
                        <div className="flex-grow border-t border-gray-300 ml-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBody;
// <section className="relative w-full h-1/5 overflow-hidden">
//     <div className="w-full h-screen text-black flex flex-col items-center p-6">
//
//         <div className="text-center mt-20 mb-28">
//             <div className="rounded-full border-2 px-4 py-1 mb-4 inline-block">
//                 <p className="text-xs">PORTFOLIO</p>
//                 <p className="text-xs font-bold">JS</p>
//             </div>
//             <h1 className="text-5xl font-extrabold">I'M HERE!</h1>
//         </div>
//
//         {/* 아래로 내리고 싶은 영역 */}
//         <div className="mt-auto w-full">
//             <div className="w-full flex items-center">
//                 <div className="flex-grow border-t border-gray-300 mr-6"></div>
//                 <span className="mx-4 text-xl font-semibold text-gray-500">Skills & Competencies</span>
//                 <div className="flex-grow border-t border-gray-300 ml-6"></div>
//             </div>
//         </div>
//     </div>
// </section>
