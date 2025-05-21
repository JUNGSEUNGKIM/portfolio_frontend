import React from "react";

const ResumeComponent = () => {
    const skills = [
        { label: "Ps", level: "w-[95%]" },
        { label: "Ai", level: "w-[80%]" },
        { label: "Xd", level: "w-[65%]" },
        { label: "Dw", level: "w-[45%]" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen text-sm font-sans">
            {/* Left Sidebar */}
            <aside className="bg-gray-800 text-white p-6 flex flex-col items-center md:items-center">
                <div className="bg-white text-black w-full md:w-auto md:h-full p-6 text-center md:text-center">
                    <h1 className="text-4xl font-extrabold">JUNGSEUNG</h1>
                    <p className="mb-2">김정승</p>
                    <div className="border-t border-amber-100 my-2 w-10 mx-auto md:mx-0" />
                    <p>1990.02.02</p>
                    <p>010-1234-5678</p>
                    <p>MIRI@miri.com</p>
                    <p className="mt-1">미리디자인 포럼</p>

                    <div className="mt-6">
                        <img
                            src="/profile.jpg"
                            alt="profile"
                            className="rounded-full w-28 h-28 object-cover border-2 border-white mx-auto md:mx-0"
                        />
                        <p className="mt-4 text-xs text-center md:text-left">
                            이 서식의 상업적 이용을 금합니다.
                        </p>
                    </div>
                    <p className="text-xs mt-6">2030 Portfolio</p>
                </div>

            </aside>

            {/* Right Content */}
            <main className="md:col-span-2 bg-gray-800 text-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <section>
                    <h2 className="font-bold border-b border-white mb-2">CAREER</h2>
                    <p>2030.07 야구 박람회 진행 참여</p>
                    <p>2031.03 미리디 인터N년</p>
                    <p>2034.06 미리디자인 근무 N년</p>
                </section>

                <section>
                    <h2 className="font-bold border-b border-white mb-2">EDUCATION</h2>
                    <p>2026.02 미타대학교 졸업</p>
                    <p>2028.03 미타대 실내디자인학과 졸업</p>
                    <p>2030.03 미타대 실내디자인 석사 과정 이수</p>
                </section>

                <section>
                    <h2 className="font-bold border-b border-white mb-2">OTHER EXPERIENCE</h2>
                    <p>2026.07 유기견 보호센터 봉사활동</p>
                    <p>2027.08 어린이 재능기부 활동</p>
                    <p>2026.04 실내디자인전 전시</p>
                </section>

                <section>
                    <h2 className="font-bold border-b border-white mb-2">AWARDS</h2>
                    <p>2027.11 실내건축 공모전 수상</p>
                    <p>2028.08 공간디자인 공모전 수상</p>
                    <p>2028.04 인터리어디자인 최우수상 수상</p>
                </section>

                <section className="col-span-1 sm:col-span-2">
                    <h2 className="font-bold border-b border-white mb-4">SKILL</h2>
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