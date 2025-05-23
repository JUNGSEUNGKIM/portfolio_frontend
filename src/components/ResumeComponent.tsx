// import React from "react";

const ResumeComponent = () => {
    const skills = [
        { label: "Ps", level: "w-[95%]" },
        { label: "Ai", level: "w-[80%]" },
        { label: "Xd", level: "w-[65%]" },
        { label: "Dw", level: "w-[45%]" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen text-sm font-sans bg-gray-50
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
            <main className="md:col-span-4  text-gray-400 p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <section>
                    <h2 className="font-bold border-b border-gray-300 mb-2">CAREER</h2>

                    <div className="space-y-4 text-gray-700 text-sm">

                        {/* 첫 경력 */}
                        <div>
                            <p className="font-semibold">2031.03 | 미리디 인터N년</p>
                        </div>

                        {/* 두 번째 경력 */}
                        <div className="items-start">
                            <p className="font-semibold">2022.07 – 현재 | Emma Healthcare</p>
                            <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-gray-600 text-left">
                                <li>React 기반 어드민 페이지 개발</li>
                                <li>NestJS 백엔드와 연동한 대시보드 구축</li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section>
                    <h2 className="font-bold border-b border-gray-300 mb-2">EDUCATION</h2>
                    <p>2026.02 미타대학교 졸업</p>
                    <p>2028.03 미타대 실내디자인학과 졸업</p>
                    <p>2030.03 미타대 실내디자인 석사 과정 이수</p>
                </section>

                <section>
                    <h2 className="font-bold border-b border-gray-300 mb-2">OTHER EXPERIENCE</h2>
                    <p>2026.07 유기견 보호센터 봉사활동</p>
                    <p>2027.08 어린이 재능기부 활동</p>
                    <p>2026.04 실내디자인전 전시</p>
                </section>

                <section>
                    <h2 className="font-bold border-b border-gray-300 mb-2">AWARDS</h2>
                    <p>2027.11 실내건축 공모전 수상</p>
                    <p>2028.08 공간디자인 공모전 수상</p>
                    <p>2028.04 인터리어디자인 최우수상 수상</p>
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
            </main>
        </div>
    );
};

export default ResumeComponent;