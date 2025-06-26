import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config';
import {motion} from "framer-motion";
export default function RssFeedViewer() {
    type RssItem = {
        title: string;
        url: string;
        html: string;
    };

    const [items, setItems] = useState<RssItem[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`${API_BASE_URL}/feed/md-list`)
            .then(res => res.json())
            .then(setItems);
        setIsLoading(false);
    }, []);

    return (
        <>
        <div className="bg-white  max-w-full overflow-y-auto shadow">
            <motion.div
                className="shadow-md bg-white min-h-80 py-12"
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
                            <h1 className="text-8xl font-extrabold text-center text-gray-900 mb-4">
                                LEARN
                            </h1>
                            <div className="flex flex-col text-left mt-12 text-gray-700 leading-loose text-sm sm:text-base md:text-lg gap-2 max-w-2xl mx-auto px-4">
                                {/*<p> 프로젝트를 진행하면서 공부한 내용들을 모아두었습니다.</p>*/}
                                {/*<p>*/}
                                {/*     */}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    <strong>업무 외 시간에도 프로젝트를 진행할 만큼</strong> 열정과 몰입을 가지고 있습니다.*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    함께할 때 더 큰 시너지를 낼 수 있다고 믿고, 협업을 소중히 여깁니다.*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    부족한 부분은 <strong>성실함과 끈기</strong>로 채워 나가겠습니다.*/}
                                {/*</p>*/}
                                <p>
                                    <strong>프로젝트를 진행하면서 공부한 내용들을 모아두었습니다.</strong>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 오른쪽 이미지 */}
                    <motion.div
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{delay: 0.7, duration: 0.6}}
                        className="w-full h-full flex justify-center mx-auto my-auto sm:pl-12"
                    >

                        <img
                            src='/3.png'
                            alt="타이틀 이미지"
                            className="shadow-md filter grayscale rounded-full w-full h-full object-cover "
                        />

                    </motion.div>
                    {/*<motion.div*/}
                    {/*    initial={{x: 100, opacity: 0}}*/}
                    {/*    animate={{x: 0, opacity: 1}}*/}
                    {/*    transition={{delay: 0.7, duration: 0.6}}*/}
                    {/*    className="w-4/5 h-4/5 flex justify-center mx-auto my-auto sm:pl-12"*/}
                    {/*>*/}

                    {/*    <img*/}
                    {/*        src="https://storage.arami.kr/uploads/1749772408267-0da3c34f.jpeg"*/}
                    {/*        alt="타이틀 이미지"*/}
                    {/*        className="shadow-md filter grayscale rounded-full w-full h-full object-contain"*/}
                    {/*    />*/}

                    {/*</motion.div>*/}
                </div>
            </motion.div>
        </div>
            <div className="lg:p-24 sm:p-12 p-4 space-y-6">
                {/* 상단 카테고리 셀렉트 */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Git Markdown </h2>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                        <option value="all">전체</option>
                        <option value="tech">기술</option>
                        <option value="book">책</option>
                        <option value="life">라이프</option>
                    </select>
                </div>
                <div className="grid gap-6 w-full grid-cols-1">
                    {isLoading ? (
                        <div>Loading feed...</div>
                    ) : (
                        <>
                            {items.map((item, idx) => (

                                <div key={idx} className="w-full max-w-full group relative flex flex-col justify-between bg-white p-2 sm:p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 transition">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition break-words line-clamp-1 overflow-hidden">
                                            {item.title}
                                        </h3>
                                        <div
                                            className="max-w-full text-sm text-gray-600 mt-3 line-clamp-1 sm:line-clamp-3 break-words overflow-hidden"
                                            dangerouslySetInnerHTML={{
                                                __html: item.html.replace(/^<p[^>]*>/i, "").replace(/<\/p>$/i, ""),
                                            }}
                                        />
                                    </a>
                                </div>

                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );

}
