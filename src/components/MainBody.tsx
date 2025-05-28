// import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MainBody = () => {
    // const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    return (
        <section className="relative w-full  ">
            <div className="w-full h-screen text-black flex flex-col items-center ">
                <div className="w-1/6 h-1/12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full h-full"
                    >
                        <SwiperSlide>
                            <img src="/test2.jpeg" alt="Project 1" className="w-full h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted className="w-full h-full object-cover">
                                <source src="/test1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted className="w-full h-full object-cover">
                                <source src="/test2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/project2.jpg" alt="Project 2" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="mt-auto w-full ">
                    <div className="w-full  flex items-center">
                        <div className="flex-grow border-t border-gray-300 mr-6 "></div>
                        <span className="mx-4 text-xl font-semibold text-gray-500 ">Skills & Competencies</span>
                        <div className="flex-grow border-t border-gray-300 ml-6 "></div>
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
