import {useEffect, useRef, useState} from "react";
import {
    FaJava, FaPython, FaReact, FaDocker, FaNodeJs, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
    SiTypescript, SiJavascript, SiSpring, SiNestjs, SiFastapi,  SiFlutter,
    SiMysql, SiPostgresql, SiOracle, SiGithubactions, SiNginx, SiUbuntu, SiOpencv, SiGoogle, SiFfmpeg,
    SiIntellijidea, SiDatagrip, SiPycharm, SiTypeorm,
    // SiEjs,SiNextdotjs,
} from "react-icons/si";
import {IconType} from "react-icons";
import { motion } from "framer-motion";
import PostPreview from "@/components/board/PostPreview.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Mousewheel} from "swiper/modules";
import axios from "axios";
import {API_BASE_URL} from "@/config.ts";
import PostPreviewModal from "@/components/board/PostPreviewModal.tsx";
import {useNavigate} from "react-router-dom";

const MainBody = () => {
    const skills = [
        { label: "Java", level: "w-[50%]", category: "Language" },
        { label: "Python", level: "w-[30%]", category: "Language" },
        { label: "JavaScript", level: "w-[60%]", category: "Frontend" },
        { label: "TypeScript", level: "w-[40%]", category: "Frontend" },
        { label: "DBMS (MySQL/PostgreSQL)", level: "w-[30%]", category: "Database" },
    ];

    const QAList = [
        {
            question: 'Q. 개발자가 되기로 결심한 이유는?',
            answer:
                '정보보호학을 전공한 후 회계사무소에서 8년간 근무하며 세금 신고와 관련된 다양한 업무를 경험했습니다.\n' +
                '그러던 중, 프로그램의 발달로 세금신고 서비스들이 웹 기반으로 전환되는 것을 보고 저 역시 그 일에 직접 참여하고 싶다는 열망이 생겼습니다.\n' +
                '결혼과 함께 새로운 도전을 결심했고, 그렇게 개발자의 길로 다시 돌아오게 되었습니다.',
        },
        {
            question: 'Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?',
            answer:
                '항상 역지사지의 마음으로 함께 일하는 동료의 입장에서 생각하고 공감하려 노력합니다.\n' +
                '이러한 태도는 팀워크를 높이는 데에도 도움이 되지만, 궁극적으로는 사용자 중심의 개발을 실현하는 데 큰 역할을 한다고 믿습니다.\n' +
                '사용자의 입장에서 더욱 편리하고 직관적인 서비스를 만드는 것이 저의 목표입니다.',
        },
        {
            question: 'Q. 자기계발을 위해 어떤 것들을 해왔는지?',
            answer:
                '새로운 기술에 대한 호기심을 가지고 직접 테스트해보는 것을 좋아합니다.\n' +
                '현업에서 부족함을 느낀 부분은 개인 서버를 통해 복습하고 실습해보며 보완해왔습니다.\n' +
                '이를 통해 Docker Compose를 활용한 환경 구성, GitHub Actions를 이용한 CI/CD 구축 등 다양한 실습 경험을 쌓을 수 있었습니다.',
        },
    ];

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    type BadgeProps = {
        bg: string;
        color: string;
        Icon: IconType;
        label: string;
    };

    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/posts`);
                console.log(res.data)
                setPosts(res.data);
            } catch (err) {
                console.error('게시글 불러오기 실패', err);
            }
        };

        fetchPosts();
    }, []);
    interface Post {
        id: number;
        title: string;
        subtitle: string;
        category: string;
        image_url?: string;
        start_date?: string;
        end_date?: string;
        duration?: string;
        status?: string;
        stacks: string[];
        content: string;
    }


    const [modalOpen, setModalOpen] = useState(false);
    const [previewData, setPreviewData] = useState<any | null>(null);

    const handlePostClick = (post: Post) => {
        setPreviewData(post);
        setModalOpen(true);
    };

    const navigate = useNavigate();

    const handlePostClickPage = (post: Post) => {
        navigate(`/posts/${post.id}`);
    };

    function Badge({ bg, color, Icon, label }: BadgeProps) {
        return (
            <div className="relative group">
                <div className={`flex justify-center gap-3 px-auto py-2 rounded-lg w-12 ${bg} ${color}`}>
                    <Icon size={24} />
                </div>
                {/* 툴팁 */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {label}
                </div>
            </div>
        );
    }


    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen text-black">
            {/* 왼쪽 고정 공간 (레이아웃 차지만 함, 스크롤 안 함) */}
            <div className="w-full md:w-1/5 w- border-b md:border-b-0 md:border-r bg-white">
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
            <div className="w-full md:w-4/5 sm:px-6 py-10 space-y-32">
                <div className="md:col-span-2  sm:p-6 text-black">
                    <div className="flex flex-col justify-start  items-center text-center sm:px-6 px-2">
                        <div className="w-full min-h-[75vh]  items-center flex flex-col justify-center">
                            <div className="w-full flex flex-col items-center justify-center py-16 mb-12 text-center">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{delay:0.5, duration: 1 }}
                                    className="text-[8rem] md:text-[10rem] font-extrabold text-gray-300 leading-none"
                                >
                                    <span className="px-6 py-2 rounded">Back-End</span>
                                </motion.h1>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0, duration: 1 }}
                                    className="-mt-6 md:-mt-10"
                                >
                                    <p className="text-xl md:text-5xl text-gray-700 tracking-wider">
                                        백엔드 개발자 <span className="text-black font-bold tracking-widest">김정승</span>입니다.
                                    </p>
                                    <p className="mt-12 text-md md:text-lg text-gray-600 leading-relaxed">
                                        동료와의 협업에서는 <span className="font-bold px-1">역지사지</span>의 마음으로,<br />
                                        업무에서는 <span className="font-bold px-1">책임감 있는</span> 개발 자세로 임합니다.
                                    </p>
                                </motion.h1>
                            </div>
                            <motion.div
                                className="w-full block p-2 my-4"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.5, duration: 0.8}}
                            >

                                <div className="flex items-center justify-center w-full ">
                                    <div className="w-full  flex items-center">
                                        <div className="flex-grow border-t border-gray-300 mr-6 "></div>
                                        <span className="mx-4 text-sm font-semibold text-gray-500 ">Portfolio</span>
                                        <div className="flex-grow border-t border-gray-300 ml-6 "></div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-full block p-2 my-4 hover:!cursor-ew-resize"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.5, duration: 0.8}}
                            >
                                <Swiper
                                    modules={[Mousewheel, FreeMode]}
                                    mousewheel={{ releaseOnEdges: true }}
                                    freeMode={true}
                                    slidesPerView={1.2}
                                    className="h-full w-full"
                                    breakpoints={{
                                        0: { slidesPerView: 1.2 },
                                        768: { slidesPerView: 2.2 },
                                        1024: { slidesPerView: 3.5 },
                                    }}
                                >
                                    {posts.map((post) => (
                                        <SwiperSlide key={post.id}>
                                            {/*<div onClick={() => handlePostClick(post)} className="cursor-pointer">*/}
                                            {/*    <PostPreview*/}
                                            {/*        image={post.image_url || '/default.jpg'}*/}
                                            {/*        title={post.title}*/}
                                            {/*        category={post.category}*/}
                                            {/*        description={post.subtitle}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                                <div onClick={() => handlePostClickPage(post)} className="cursor-pointer">
                                                    <PostPreview
                                                        image={post.image_url || '/default.jpg'}
                                                        title={post.title}
                                                        category={post.category}
                                                        description={post.subtitle}
                                                    />
                                                </div>
                                        </SwiperSlide>
                                    ))}
                                    {/*<SwiperSlide>*/}
                                    {/*    <PostPreview*/}
                                    {/*        image="/3.png"*/}
                                    {/*        title="Creating a lean design system"*/}
                                    {/*        category="Design system"*/}
                                    {/*        description="Comprehensive guidance on setting up a lean and efficient design system."*/}
                                    {/*    />*/}
                                    {/*</SwiperSlide>*/}

                                </Swiper>
                            </motion.div>
                            {modalOpen && previewData && (
                                <PostPreviewModal
                                    modalOpen={modalOpen}
                                    previewData={previewData}
                                    onClose={() => setModalOpen(false)}
                                    onSave={() => {
                                        // 저장 로직 or noop
                                        handlePostClick(posts[0])
                                        console.log("Save button clicked");
                                    }}
                                    // onSave={handleSaveToServer}
                                />
                            )}

                        </div>




                        <motion.div
                            className="w-full block p-2 my-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1.5, duration: 0.8}}
                        >

                            <div className="flex items-center justify-center w-full ">
                                <div className="w-full  flex items-center">
                                    <div className="flex-grow border-t border-gray-300 mr-6 "></div>
                                    <span className="mx-4 text-sm font-semibold text-gray-500 ">Skills & Competencies</span>
                                    <div className="flex-grow border-t border-gray-300 ml-6 "></div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="sm:p-6 text-sm font-sans w-full text-gray-700">
                            {/* 2단 레이아웃으로 나눌 부분 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* CAREER */}
                                <section className="items-center ">
                                    <h2 className="font-bold border-b border-gray-300 mb-2">CAREER</h2>

                                    <div className="space-y-4 text-gray-700 text-xs sm:text-sm max-w-full mx-auto ">
                                        <div className="items-start ">
                                            <p className="font-semibold sm:text-left"> 2024.10 – 현재 | Emma Healthcare</p>
                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
                                                <li>RSpring Boot, NestJS, Python을 활용한 REST API 개발</li>
                                                <li>서버 성능 최적화 및 배포</li>
                                                <li>JavaScript 기반 MediaPipe, OpenCV 활용 영상/이미지 처리</li>
                                            </ul>
                                        </div>
                                        <div className="items-start">
                                            <p className="font-semibold sm:text-left">2018.09 – 2023.09 | 진성회계법인제주지점</p>
                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
                                                <li>법인 세무 조정 및 신고</li>
                                                <li>개인 부가세신고, 세무기장, 세무조정, 세무신고</li>
                                            </ul>
                                        </div>
                                        <div className="items-start">
                                            <p className="font-semibold sm:text-left">2016.11 – 2018.09 | 사단법인 제주올레</p>
                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
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
                                            <p className="font-semibold sm:text-left">2024.07 – 2024.08 | [서울시 뉴딜] <br className="sm:hidden" />
                                                모던 웹 풀스택 개발자 과정</p>
                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
                                                <li>프론트앤드 개발 React, Node.js 심화</li>
                                                <li>UX/UI 기획 및 Figma 이해</li>
                                            </ul>
                                        </div>
                                        <div className="items-start">
                                            <p className="font-semibold sm:text-left">
                                                2023.12 - 2024.06 | 코드랩 아카데미<br />
                                                AI 인공지능컨택센터(AICC) 웹서비스개발 과정
                                            </p>

                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
                                                <li>프론트앤드 개발(html, css, javascript)</li>
                                                <li>
                                                    GIT 버전관리, 활용
                                                    <div className="flex justify-between items-center">
                                                        <p className="text-black text-center sm:text-left w-full">

                                                        </p>
                                                        <button
                                                            className={`text-sm text-blue-500 hover:underline ml-2 w-20 sm:w-24 ${open1 ? "hidden" : ""}`}
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
                                                        <li>AICC 웹기반 서비스 프로젝트
                                                            <div className="flex justify-between items-center">
                                                                <p className="text-black text-center sm:text-left w-full">

                                                                </p>
                                                                <button
                                                                    className={`text-sm text-blue-500 hover:underline ml-2 w-20 sm:w-24 ${open1 ? "" : "hidden"}`}
                                                                    onClick={() => setOpen1(!open1)}
                                                                >
                                                                    {open1 ? "접기 ▲" : "더 보기 ▼"}
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </>
                                                )}
                                            </ul>


                                        </div>

                                        {/* 두 번째 과정 */}
                                        <div className="items-start">
                                            <p className="font-semibold sm:text-left">
                                                2015.02 - 2015.08 | 한국소프트웨어교육원<br />
                                                Java OpenSource Framework 전문가 양성 과정
                                            </p>

                                            <ul className="sm:list-disc list-outside pl-5 mt-1 sm:ml-2 space-y-1 text-gray-600 sm:text-left">
                                                <li>JAVA기반 개발환경 구축 및 활용</li>
                                                <li className="">

                                                        웹UI설계 및 구현
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-black text-center sm:text-left w-full">

                                                            </p>
                                                            <button
                                                                className={`text-sm text-blue-500 hover:underline ml-2 w-20 sm:w-24 ${open2 ? "hidden" : ""}`}
                                                                onClick={() => setOpen2(!open2)}
                                                            >
                                                                {open1 ? "접기 ▲" : "더 보기 ▼"}
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
                                                        <li>회원가입, 로그인, 게시판 구축 가능
                                                            <div className="flex justify-between items-center">
                                                                <p className="text-black text-center sm:text-left w-full">

                                                                </p>
                                                                <button
                                                                    className={`text-sm text-blue-500 hover:underline ml-2 w-20 sm:w-24 ${open2 ? "" : "hidden"}`}
                                                                    onClick={() => setOpen2(!open2)}
                                                                >
                                                                    {open1 ? "접기 ▲" : "더 보기 ▼"}
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </>
                                                )}
                                            </ul>


                                        </div>

                                    </div>
                                </section>

                                <section className="items-center">
                                    <h2 className="font-bold border-b border-gray-300 mb-4">TOOLS & TECHNOLOGIES</h2>

                                    <section className="mt-8 space-y-2">

                                        {/* Languages */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Languages</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#007396]" color="text-white" Icon={FaJava} label="Java" />
                                                <Badge bg="bg-[#3178C6]" color="text-white" Icon={SiTypescript} label="TypeScript" />
                                                <Badge bg="bg-[#F7DF1E]" color="text-black" Icon={SiJavascript} label="JavaScript" />
                                                <Badge bg="bg-[#3776AB]" color="text-white" Icon={FaPython} label="Python" />
                                            </div>
                                        </div>

                                        {/* Backend */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Backend</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#6DB33F]" color="text-white" Icon={SiSpring} label="Spring Boot" />
                                                <Badge bg="bg-[#E0234E]" color="text-white" Icon={SiNestjs} label="NestJS" />
                                                <Badge bg="bg-[#009688]" color="text-white" Icon={SiFastapi} label="FastAPI" />
                                                <Badge bg="bg-[#339933]" color="text-white" Icon={FaNodeJs} label="Node.js" />
                                            </div>
                                        </div>

                                        {/* Frontend */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Frontend</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#E34F26]" color="text-white" Icon={FaHtml5} label="HTML" />
                                                <Badge bg="bg-[#1572B6]" color="text-white" Icon={FaCss3Alt} label="CSS" />
                                                <Badge bg="bg-[#61DAFB]" color="text-black" Icon={FaReact} label="React" />
                                                <Badge bg="bg-[#02569B]" color="text-white" Icon={SiFlutter} label="Flutter" />
                                            </div>
                                        </div>

                                        {/* DevOps & Tools */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">DevOps & Tools</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#2496ED]" color="text-white" Icon={FaDocker} label="Docker" />
                                                <Badge bg="bg-[#2088FF]" color="text-white" Icon={SiGithubactions} label="GitHub Actions" />
                                                <Badge bg="bg-[#009639]" color="text-white" Icon={SiNginx} label="Nginx" />
                                                <Badge bg="bg-[#E95420]" color="text-white" Icon={SiUbuntu} label="Ubuntu" />
                                            </div>
                                        </div>

                                        {/* Database */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Database</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#F80000]" color="text-white" Icon={SiOracle} label="Oracle" />
                                                <Badge bg="bg-[#4479A1]" color="text-white" Icon={SiMysql} label="MySQL" />
                                                <Badge bg="bg-[#336791]" color="text-white" Icon={SiPostgresql} label="PostgreSQL" />
                                                <Badge bg="bg-[#FF0000]" color="text-white" Icon={SiTypeorm} label="TypeORM" />
                                            </div>
                                        </div>

                                        {/* Media / AI */}
                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Media / AI</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#5C3EE8]" color="text-white" Icon={SiOpencv} label="OpenCV" />
                                                <Badge bg="bg-[#FF6F00]" color="text-white" Icon={SiGoogle} label="MediaPipe" />
                                                <Badge bg="bg-[#007808]" color="text-white" Icon={SiFfmpeg} label="FFmpeg" />
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <h3 className="font-semibold text-sm text-gray-700 w-24">Tools / IDE</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <Badge bg="bg-[#000000]" color="text-white" Icon={SiIntellijidea} label="IntelliJ" />
                                                <Badge bg="bg-[#21D789]" color="text-black" Icon={SiDatagrip} label="DataGrip" />
                                                <Badge bg="bg-[#3776AB]" color="text-white" Icon={SiPycharm} label="PyCharm" />
                                            </div>
                                        </div>

                                    </section>



                                </section>


                                <section className="items-center ">
                                    <h2 className="font-bold border-b border-gray-300 mb-4 ">SKILL</h2>
                                    <div className="space-y-6 ">
                                        {skills.map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-center">
                                                    <p className="font-semibold text-sm">{skill.label}</p>
                                                    <p className="text-xs text-gray-500">{skill.level.replace(/[^\d]/g, '')}%</p>
                                                </div>
                                                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                                                    <div
                                                        className={`bg-blue-600 h-2 rounded-full transition-all duration-1000 ${visible ? skill.level : 'w-0'}`}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <section className="col-span-1 sm:col-span-2" ref={ref}>
                                    <h2 className="font-bold border-b border-gray-300 mb-4">INTERVIEW</h2>
                                    <div className="space-y-6 text-left flex-col items-center pt-12">
                                        {QAList.map(({ question, answer }, index) => (
                                            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                                                <p className="text-lg font-semibold text-gray-900 mb-2">{question}</p>
                                                {answer.split('\n').map((line, i) => (
                                                    <p key={i} className="text-sm text-gray-700 leading-relaxed">
                                                        {line}
                                                    </p>
                                                ))}
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
