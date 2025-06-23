// import {useEffect, useLayoutEffect, useRef, useState} from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
//
// gsap.registerPlugin(ScrollTrigger);
//
// const timelineData = [
//     { year: "2006", description: "졸업, 입학." },
//     { year: "2010", description: "전역" },
//     { year: "2011", description: "A 기반 원격 건강 모니터링 서비스 상용화." },
//     { year: "2014", description: "동남아 시장 진출 및 첫 해외 파트너십 체결." },
//     { year: "2016", description: "딥러닝 기반 생체 신호 분석 연구소 개소." },
//     { year: "2018", description: "제주이전." },
//     { year: "2023", description: "비접촉식 심박 측정 기술 프로토타입 완성." },
//     { year: "2024", description: "AI 기반 원격 건강 모니터링 서비스 상용화." },
//     { year: "2025", description: "동남아 시장 진출 및 첫 해외 파트너십 체결." },
// ];
//
// export default function AboutPage() {
//     const containerRef = useRef(null);
//     const scrollWrapperRef = useRef(null);
//     const [trackWidth, setTrackWidth] = useState(0);
//
//     // useEffect(() => {
//     //     const update = () => {
//     //         if (scrollWrapperRef.current) {
//     //             const track = scrollWrapperRef.current.querySelector(".timeline-track");
//     //             if (track) setTrackWidth(track.scrollWidth);
//     //         }
//     //     };
//     //     update();
//     //     window.addEventListener("resize", update);
//     //     return () => window.removeEventListener("resize", update);
//     // }, []);
//     useLayoutEffect(() => {
//         const wrapper = scrollWrapperRef.current;
//         const track = wrapper?.querySelector(".timeline-track");
//
//         if (!track) return;
//
//         const resizeObserver = new ResizeObserver(() => {
//             setTrackWidth(track.scrollWidth);
//         });
//
//         resizeObserver.observe(track);
//
//         return () => {
//             resizeObserver.disconnect();
//         };
//     }, []);
//
//
//
//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             const wrapper = scrollWrapperRef.current;
//             const totalWidth = wrapper.scrollWidth;
//             const viewWidth = window.innerWidth;
//
//             gsap.to(".timeline-track", {
//                 x: () => `-${totalWidth - viewWidth}px`,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: wrapper,
//                     start: "top top",
//                     end: () => `+=${totalWidth}`,
//                     pin: true,
//                     scrub: 1,
//                     anticipatePin: 1,
//                 },
//             });
//
//             gsap.utils.toArray(".year-block").forEach((block) => {
//                 gsap.fromTo(
//                     block,
//                     { opacity: 0, y: 100 },
//                     {
//                         opacity: 1,
//                         y: 0,
//                         ease: "power2.out",
//                         scrollTrigger: {
//                             trigger: block,
//                             start: "left center",
//                             end: "right+=400 center",
//                             scrub: 0.6,
//                         },
//                     }
//                 );
//             });
//
//             gsap.utils.toArray(".circle-img").forEach((circle) => {
//                 gsap.to(circle, {
//                     rotate: 360,
//                     opacity: 1,
//                     duration: 2,
//                     scrollTrigger: {
//                         trigger: circle,
//                         scrub: 1,
//                         start: "left center",
//                     },
//                 });
//             });
//         }, containerRef);
//
//         return () => ctx.revert();
//     }, []);
//
//     return (
//         <div ref={containerRef} className="relative w-full bg-gray-50">
//             {/*<div style={{ height: `${scrollHeight}px` }}></div>*/}
//
//             <div
//                 ref={scrollWrapperRef}
//                 className="fixed top-0 left-0 w-full h-screen overflow-hidden"
//             >
//                 <h2 className="text-3xl font-bold text-center py-10 bg-gray-50">인생 연혁</h2>
//                 {/*<div*/}
//                 {/*    className="timeline-track flex h-full  px-20 items-center"*/}
//                 {/*    style={{ width: `${timelineData.length * 100}vw`, minWidth: `${timelineData.length * 100}vw` }}*/}
//                 {/*>*/}
//                 <div
//                     className="timeline-track flex h-full px-20 items-center"
//                     // style={{
//                     //     width: `${window.innerWidth * timelineData.length}px`,
//                     //     minWidth: `${window.innerWidth * timelineData.length}px`
//                     // }}
//                     style={{
//                         width: `${trackWidth}px`,
//                         minWidth: `${trackWidth}px`
//                     }}
//                 >
//                     {timelineData.map((item, index) => (
//                         <div
//                             key={index}
//                             className="year-block relative flex-shrink-0 w-screen flex flex-col items-center justify-center"
//                         >
//                             <div className="circle-img w-20 h-20 rounded-full bg-blue-200 opacity-0 mb-6"></div>
//                             <h3 className="text-4xl font-bold text-gray-800 mb-4">{item.year}</h3>
//                             <p className="text-lg text-center text-gray-599 max-w-md">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {motion} from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    { year: "2006", description: "졸업, 입학." },
    { year: "2010", description: "전역" },
    { year: "2011", description: "A 기반 원격 건강 모니터링 서비스 상용화." },
    { year: "2014", description: "동남아 시장 진출 및 첫 해외 파트너십 체결." },
    { year: "2016", description: "딥러닝 기반 생체 신호 분석 연구소 개소." },
    { year: "2018", description: "제주이전." },
    { year: "2023", description: "비접촉식 심박 측정 기술 프로토타입 완성." },
    { year: "2024", description: "AI 기반 원격 건강 모니터링 서비스 상용화." },
    { year: "2025", description: "동남아 시장 진출 및 첫 해외 파트너십 체결." }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
    const topTable = useRef<HTMLDivElement | null>(null);

    const [trackWidth, setTrackWidth] = useState(0);

    // 트랙 너비 측정
    useLayoutEffect(() => {
        const wrapper = scrollWrapperRef.current;
        const track = wrapper?.querySelector(".timeline-track") as HTMLElement | null;
        if (!track) return;

        const resizeObserver = new ResizeObserver(() => {
            setTrackWidth(track.scrollWidth);
        });

        resizeObserver.observe(track);
        return () => resizeObserver.disconnect();
    }, []);

    // 리사이즈 대응
    useEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // GSAP 애니메이션
    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = scrollWrapperRef.current;
            if (!wrapper) return;

            const totalWidth = wrapper.scrollWidth;
            const viewWidth = window.innerWidth;

            gsap.to(".timeline-track", {
                x: () => `-${totalWidth - viewWidth}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapper,
                    start: "top top",
                    end: () => `+=${trackWidth - window.innerWidth+1000 }`,
                    pin: true,
                    scrub: 1,
                    // anticipatePin: 0,
                    markers: true,
                },
            });

            gsap.utils.toArray<HTMLElement>(".year-block").forEach((block) => {
                gsap.fromTo(
                    block,
                    { opacity: 0, y: 200 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "left center",
                            end: "right+=400 center",
                            scrub: 0.6,
                        },
                    }
                );
            });

            gsap.to(".circle-img", {
                rotate: 1440,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-track", // 전체 트랙 기준
                    start: "left left",
                    end: "right right",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [trackWidth]);

    return (
        <div>
            {/*<div ref={topTable} className="h-80 bg-yellow-300 z-20">*/}
                <div ref={topTable}  className="bg-white  max-w-full overflow-y-auto">
                    <motion.div
                        className="shadow-md z-10 bg-white min-h-80 py-12"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5, duration: 0.6}}
                    >
                        {/*<div className="shadow-md bg-white min-h-80 py-12">*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto ">
                            {/* 왼쪽 정보 */}
                            <motion.div
                                initial={{x: -100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.7, duration: 0.6}}
                                className="flex flex-col justify-between sm:pr-12 p-2"
                            >
                                <div className="flex flex-col justify-center flex-grow">
                                    <h1 className="text-4xl font-extrabold text-center text-gray-900">
                                        [ (제목 없음) ]
                                    </h1>
                                    <h1 className="text-xl font-extrabold text-center mb-6 text-gray-400">
                                        title
                                    </h1>

                                    <div className="text-sm text-gray-600 mb-2">
                                        <div className="sm:flex sm:justify-between mb-1">
                                            <p>📂 <b>카테고리:</b>category</p>
                                            <div className="flex gap-x-2">
                                                <p>📅 startdate</p>
                                                <p>-</p>
                                                <p>enddate</p>
                                            </div>
                                        </div>
                                        <div className="flex sm:justify-end gap-x-4">
                                            <p><b>소요 기간:</b> 일</p>
                                            <p><b>진행 상태:</b></p>
                                        </div>
                                    </div>

                                    <hr className="my-1 mb-4 border-gray-300"/>

                                    <p className="text-gray-700 whitespace-pre-line mb-6 text-base text-left">
                                        subtitle
                                    </p>
                                </div>

                                <div className="mt-auto pt-8">
                                    <h3 className="font-semibold text-sm text-gray-700 mb-2 text-left"></h3>
                                    stack
                                </div>
                            </motion.div>

                            {/* 오른쪽 이미지 */}
                            <motion.div
                                initial={{x: 100, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.7, duration: 0.6}}
                                className="w-full flex justify-center sm:pl-12"
                            >

                                <img
                                    src='/3.png'
                                    alt="타이틀 이미지"
                                    className=" shadow-md object-cover"
                                />

                            </motion.div>
                        </div>
                        <div className="w-full h-1/4 px-4">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 3999, disableOnInteraction: false }}
                                loop={true}
                                spaceBetween={10}
                                className="w-full h-full"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1, // 모바일
                                    },
                                    768: {
                                        slidesPerView: 2, // 태블릿
                                    },
                                    1024: {
                                        slidesPerView: 4, // 데스크탑 이상
                                    },
                                }}

                            >
                                <SwiperSlide>
                                    <img src="/test1.mov" alt="Project 1" className="w-full h-full object-cover rounded-lg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                        <source src="https://storage.arami.kr/s3/uploads/test1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                        <source src="https://storage.arami.kr/s3/uploads/test2.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                        <source src="https://storage.arami.kr/s3/uploads/test3.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                        <source src="https://storage.arami.kr/s3/uploads/test4.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </SwiperSlide>
                                {/* 필요한 만큼 SwiperSlide 계속 추가 */}
                            </Swiper>
                        </div>
                    </motion.div>


                {/*</div>*/}
            </div>
            <div ref={containerRef} className="relative w-full bg-gray-50">
                <div
                    ref={scrollWrapperRef}
                    className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-green-300 flex justify-normal
                    "
                >
                    <div
                        className="timeline-track flex h-full px-20 items-center "
                        style={{
                            width: `${trackWidth}px`,
                            minWidth: `${trackWidth}px`,
                        }}
                    >
                        <div className="year-block relative flex-shrink-0 w-screen flex flex-col items-center justify-center">
                            인생 연혁
                        </div>
                        {timelineData.map((item, index) => (
                            <div>
                                <div className="w-full border-t-8 border-dotted border-amber-600 mx-3"></div>
                                <div
                                    key={index}
                                    className="year-block relative flex-shrink-0 w-48 mx-44 flex flex-col items-center justify-start"
                                >

                                    <div className="relative w-full flex justify-center -mt-3 mb-5">
                                        {/* 연결 점 */}
                                        <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                    </div>

                                    <div
                                        className="bg-white shadow-lg border rounded-xl p-4 w-64 h-[360px] flex flex-col justify-start items-center">
                                        {/* 이미지 */}
                                        <div
                                            className="circle-img w-40 h-40 rounded-md bg-blue-200 overflow-hidden mb-4">
                                            <img
                                                src="/1.png"
                                                alt="폴라로이드 이미지"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* 텍스트 */}
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.year}</h3>
                                        <p className="text-sm text-center text-gray-600 px-2">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ✅ 스크롤을 부드럽게 이어주는 영역 */}
            <div className="h-[100vh] bg-white flex items-center justify-center text-gray-400 text-2xl">
                <div className="w-full h-1/4 px-4">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3999, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={10}
                        className="w-full h-full"
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // 모바일
                            },
                            768: {
                                slidesPerView: 2, // 태블릿
                            },
                            1024: {
                                slidesPerView: 4, // 데스크탑 이상
                            },
                        }}

                    >
                        <SwiperSlide>
                            <img src="/test1.mov" alt="Project 1" className="w-full h-full object-cover rounded-lg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                <source src="https://storage.arami.kr/s3/uploads/test1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                <source src="https://storage.arami.kr/s3/uploads/test2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                <source src="https://storage.arami.kr/s3/uploads/test3.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                                <source src="https://storage.arami.kr/s3/uploads/test4.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </SwiperSlide>
                        {/* 필요한 만큼 SwiperSlide 계속 추가 */}
                    </Swiper>
                </div>
                끝입니다 😄
            </div>
        </div>
    );
}
