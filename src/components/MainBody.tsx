import { useState } from "react";

const MainBody = () => {
        const skills = [
        { label: "Ps", level: "w-[95%]" },
        { label: "Ai", level: "w-[80%]" },
        { label: "Xd", level: "w-[65%]" },
        { label: "Dw", level: "w-[45%]" },
    ];
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen text-black">
            {/* 왼쪽 고정 공간 (레이아웃 차지만 함, 스크롤 안 함) */}
            <div className="w-full md:w-1/4 w- border-b md:border-b-0 md:border-r bg-white">
                <div className="md:sticky md:top-0 md:h-screen flex flex-col items-center justify-center p-6">
                    <img src="/IMG_1051.jpeg" className="rounded-full w-40 h-40 object-cover mb-6" />
                    <h1 className="text-3xl font-bold">JUNGSEUNG</h1>
                    <p className="text-xl font-semibold">김정승</p>
                    <div className="border-t-4 border-gray-500 w-10 my-6" />
                    <div className="space-y-1 text-sm text-center">
                        <p>010-5428-5284</p>
                        <p>kimjs5284@daum.net</p>
                    </div>
                </div>
            </div>

            {/* 오른쪽: 전체 페이지 스크롤 담당 */}
            <div className="w-full md:w-full px-6 py-10 space-y-32">
                <div className="md:col-span-2  p-6 text-black">
                    <div className="flex flex-col justify-start  items-center text-center px-6">
                        <div className="w-full h-[75vh]  items-center flex flex-col ">
                            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">안녕하세요</h1>
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                                백엔드 개발자를 희망하는 <span className="text-blue-600">김정승</span>입니다.
                            </h2>

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
                        </div>


                        <div className="mt-20 w-full">
                            <div className="w-full flex items-center">
                                <div className="flex-grow border-t border-gray-300 mr-6" />
                                <span className="mx-4 text-xl font-semibold text-gray-500">Skills & Competencies</span>
                                <div className="flex-grow border-t border-gray-300 ml-6" />
                            </div>
                        </div>
                        <div className="p-6 text-sm font-sans w-full text-gray-700">
                            {/* 2단 레이아웃으로 나눌 부분 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* CAREER */}
                                <section className="items-center ">
                                    <h2 className="font-bold border-b border-gray-300 mb-2">CAREER</h2>

                                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm max-w-full mx-auto ">
                                        <div className="items-start ">
                                            <p className="font-semibold sm:text-left">2024.10 – 현재 | Emma Healthcare</p>
                                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 sm:text-left">
                                                <li>RSpring Boot, NestJS, Python을 활용한 REST API 개발</li>
                                                <li>서버 성능 최적화 및 배포</li>
                                                <li>JavaScript 기반 MediaPipe, OpenCV 활용 영상/이미지 처리</li>
                                            </ul>
                                        </div>
                                        <div className="items-start">
                                            <p className="font-semibold">2018.09 – 2023.09 | 진성회계법인제주지점</p>
                                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 sm:text-left">
                                                <li>법인 세무 조정 및 신고</li>
                                                <li>개인 부가세신고, 세무기장, 세무조정, 세무신고</li>
                                            </ul>
                                        </div>
                                        <div className="items-start">
                                            <p className="font-semibold">2016.11 – 2018.09 | 사단법인 제주올레</p>
                                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                                <li>총무 및 물류업무</li>
                                                <li>인사, 세무기장, 물류</li>
                                            </ul>
                                        </div>

                                    </div>
                                </section>

                                <section className="items-center ">
                                    <h2 className="font-bold border-b border-gray-300 mb-2">EDUCATION</h2>

                                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm  mx-auto ">
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
                                                <li className="">
                                                    <div className="flex items-center">
                                                        GIT 버전관리, 활용
                                                        <button
                                                            className="text-sm text-blue-500 hover:underline ml-auto"
                                                            onClick={() => setOpen1(!open1)}
                                                        >
                                                            {open1 ? "접기 ▲" : "더 보기 ▼"}
                                                        </button>
                                                    </div>
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
                                                Java OpenSource Framework 전문가 양성 과정
                                            </p>

                                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                                <li>JAVA기반 개발환경 구축 및 활용</li>
                                                <li className="">
                                                    <div className="flex items-center">
                                                        웹UI설계 및 구현
                                                        <button
                                                            className="text-sm text-blue-500 hover:underline ml-auto"
                                                            onClick={() => setOpen2(!open2)}
                                                        >
                                                            {open2 ? "접기 ▲" : "더 보기 ▼"}
                                                        </button>
                                                    </div>
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

                                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm  mx-auto ">
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

                                    <div className="space-y-4 text-gray-700 text-sm  mx-auto ">
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
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default MainBody;
