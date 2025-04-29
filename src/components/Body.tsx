function Body() {
    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="text-center mb-24">
                <h2 className="text-4xl font-bold mb-4">Hi, I'm Jungseung 👋</h2>
                <p className="text-lg text-gray-600">
                    I'm a passionate Backend Developer based in Korea.
                </p>
            </section>

            {/* About Section */}
            <section id="about" className="mb-24">
                <h3 className="text-3xl font-semibold mb-6">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                    저는 백엔드를 주력으로 하는 개발자입니다. Java, Spring Boot, NestJS, Docker 환경을 다루며,
                    효율적인 서버 아키텍처를 설계하고 구축하는 것에 관심이 많습니다.
                </p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-24">
                <h3 className="text-3xl font-semibold mb-6">Skills</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Java, Spring Boot</li>
                    <li>TypeScript, NestJS</li>
                    <li>Docker, CI/CD, AWS</li>
                    <li>MySQL, PostgreSQL</li>
                </ul>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-24">
                <h3 className="text-3xl font-semibold mb-6">Projects</h3>
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold">Project 1: Home Server System</h4>
                        <p className="text-gray-700">
                            Docker와 Nginx, PostgreSQL을 활용한 개인 서버 구축 및 운영 경험.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">Project 2: Survey Web App</h4>
                        <p className="text-gray-700">
                            NestJS와 React 기반으로 설문 플랫폼 구축 및 배포.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center">
                <h3 className="text-3xl font-semibold mb-6">Contact</h3>
                <p className="text-gray-700">
                    이메일로 연락주세요:{" "}
                    <a href="mailto:your-email@example.com" className="text-blue-500 underline">
                        your-email@example.com
                    </a>
                </p>
            </section>
        </div>
    );
}

export default Body;
