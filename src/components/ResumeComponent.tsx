// import React from "react";
import { useState } from "react";

const ResumeComponent = () => {
    const skills = [
        { label: "Ps", level: "w-[95%]" },
        { label: "Ai", level: "w-[80%]" },
        { label: "Xd", level: "w-[65%]" },
        { label: "Dw", level: "w-[45%]" },
    ];
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen text-sm font-sans
                       rounded-2xl md:mx-8 mx-1
        ">
            {/* Left Sidebar */}
            <aside className=" text-black  flex flex-col items-center md:items-center">
                <div className="text-black w-full md:w-auto md:h-full text-center md:text-center flex flex-col justify-between">
                    {/* 상단 그라데이션 */}
                    <div className="h-36 "/>
                        {/*bg-gradient-to-b from-gray-800 via-gray-300 to-gray-100" />*!/*/}

                    {/* 콘텐츠 내용 */}
                    <div className=" items-center flex-grow">
                        <div className="mb-16 flex justify-center">
                            <img
                                src="/profile.jpg"
                                alt="profile"
                                className="rounded-full w-28 h-28 object-cover border-2 border-white"
                            />
                        </div>

                        <div className="text-4xl font-extrabold mb-3 w-full">JUNGSEUNG</div>
                        <p className=" text-2xl font-extrabold">김정승</p>

                        <div className="flex justify-center my-8">
                            <div className="border-t-4 border-gray-500 w-10" />
                        </div>

                        <div className="space-y-4 mb-6">
                            <p>010-5428-5284</p>
                            <p>kimjs5284@daum.net</p>
                        </div>


                    </div>

                    {/* 맨 아래 고정되는 영역 */}
                    {/*<div className="px-6 py-4">*/}

                    {/*    <p className="text-xs mt-2">2025 Portfolio</p>*/}
                    {/*</div>*/}
                </div>

            </aside>

            {/* Right Content */}
            <main className="md:col-span-4  text-gray-400 p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <section className="items-center ">
                    <h2 className="font-bold border-b border-gray-300 mb-2">CAREER</h2>

                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm max-w-72 mx-auto ">
                        <div className="items-start">
                            <p className="font-semibold">2024.10 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>RSpring Boot, NestJS, Python을 활용한 REST API 개발</li>
                                <li>서버 성능 최적화 및 배포</li>
                                <li>JavaScript 기반 MediaPipe, OpenCV 활용 영상/이미지 처리</li>
                            </ul>
                        </div>
                        <div className="items-start">
                            <p className="font-semibold">2018.09 – 2023.09 | 진성회계법인제주지점</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>법인 세무 조정 및 신고</li>
                                <li>개인 부가세신고, 세무기장, 세무조정, 세무신고</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="items-center ">
                    <h2 className="font-bold border-b border-gray-300 mb-2">EDUCATION</h2>

                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm max-w-72 mx-auto ">
                        <div className="items-start">
                            <p className="font-semibold">2024.07 – 2024.08 | [서울시 뉴딜]<br/>
                            모던 웹 풀스택 개발자 과정</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>프론트앤드 개발 React, Node.js 심화</li>
                                <li>UX/UI 기획 및 Figma 이해</li>
                            </ul>
                        </div>
                        <div className="items-start">
                            <p className="font-semibold">
                                2023.12 - 2024.06 | 코드랩 아카데미<br />
                                AI 인공지능컨택센터(AICC) 웹서비스개발 과정
                            </p>

                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>프론트앤드 개발(html, css, javascript)</li>
                                <li className="flex justify-between items-center">
                                    GIT 버전관리, 활용
                                    <button
                                        className="text-sm text-blue-500 hover:underline ml-4"
                                        onClick={() => setOpen1(!open1)}
                                    >
                                        {open1 ? "접기 ▲" : "더 보기 ▼"}
                                    </button>
                                </li>
                                {open1 && (
                                    <>
                                        <li>Oracle, DBMS 설계 및 관리</li>
                                        <li>DB 설치 및 기본 SQL 작성, React.js, Node.js 풀스택 개발</li>
                                        <li>Python 데이터 분석</li>
                                        <li>Linux 관점의 클라우드 기반 컨테이너 운영</li>
                                        <li>머신러닝, 딥러닝 학습</li>
                                        <li>AICC 웹기반 서비스 프로젝트</li>
                                    </>
                                )}
                            </ul>


                        </div>

                        {/* 두 번째 과정 */}
                        <div className="items-start">
                            <p className="font-semibold">
                                2015.02 - 2015.08 | 한국소프트웨어교육원<br />
                                Java OpenSource Framework 와 Hybrid App 전문가 양성 과정
                            </p>

                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>JAVA기반 개발환경 구축 및 활용</li>
                                <li className="flex justify-between items-center">
                                    웹UI설계 및 구현
                                    <button
                                        className="text-sm text-blue-500 hover:underline ml-4"
                                        onClick={() => setOpen2(!open2)}
                                    >
                                        {open2 ? "접기 ▲" : "더 보기 ▼"}
                                    </button>
                                </li>
                                {open2 && (
                                    <>
                                        <li>GIT 버전관리, 활용</li>
                                        <li>DBMS설계 및 관리</li>
                                        <li>JSP에서의 JDBC를 활용한 웹 서비스 구현</li>
                                        <li>Spring Framework를 활용한 웹 서비스 설계 및 구현</li>
                                        <li>데이터 베이스 및 테이블 설계</li>
                                        <li>회원가입, 로그인, 게시판 구축 가능</li>
                                    </>
                                )}
                            </ul>


                        </div>

                    </div>
                </section>

                <section className="items-center ">
                    <h2 className="font-bold border-b border-gray-300 mb-2">OTHER EXPERIENC</h2>

                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm max-w-72 mx-auto ">
                        <div className="items-start">
                            <p className="font-semibold">2024.10 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>React 기반 어드민 페이지 개발</li>
                                <li>NestJS 백엔드와 연동한 대시보드 구축</li>
                            </ul>
                        </div>
                        <div className="items-start">
                            <p className="font-semibold">2022.07 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>React 기반 어드민 페이지 개발</li>
                                <li>NestJS 백엔드와 연동한 대시보드 구축</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="items-center ">
                    <h2 className="font-bold border-b border-gray-300 mb-2">AWARDS</h2>

                    <div className="space-y-4 text-gray-700 text-sm max-w-72 mx-auto ">
                        <div className="items-start">
                            <p className="font-semibold">2024.10 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>React 기반 어드민 페이지 개발</li>
                                <li>NestJS 백엔드와 연동한 대시보드 구축</li>
                            </ul>
                        </div>
                        <div className="items-start">
                            <p className="font-semibold">2022.07 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>React 기반 어드민 페이지 개발</li>
                                <li>NestJS 백엔드와 연동한 대시보드 구축</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/*<section>*/}
                {/*    <h2 className="font-bold border-b border-gray-300 mb-2">EDUCATION</h2>*/}
                {/*    <p>2026.02 미타대학교 졸업</p>*/}
                {/*    <p>2028.03 미타대 실내디자인학과 졸업</p>*/}
                {/*    <p>2030.03 미타대 실내디자인 석사 과정 이수</p>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2 className="font-bold border-b border-gray-300 mb-2">OTHER EXPERIENCE</h2>*/}
                {/*    <p>2026.07 유기견 보호센터 봉사활동</p>*/}
                {/*    <p>2027.08 어린이 재능기부 활동</p>*/}
                {/*    <p>2026.04 실내디자인전 전시</p>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2 className="font-bold border-b border-gray-300 mb-2">AWARDS</h2>*/}
                {/*    <p>2027.11 실내건축 공모전 수상</p>*/}
                {/*    <p>2028.08 공간디자인 공모전 수상</p>*/}
                {/*    <p>2028.04 인터리어디자인 최우수상 수상</p>*/}
                {/*</section>*/}

                <section className="col-span-1 sm:col-span-2">
                    <h2 className="font-bold border-b border-gray-300 mb-4">SKILL</h2>
                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <p className="font-semibold mb-1">{skill.label}</p>
                                <div className="w-full bg-gray-300 h-2 rounded-full">
                                    <div
                                        className={`bg-blue-600 h-2 rounded-full ${skill.level}`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ResumeComponent;