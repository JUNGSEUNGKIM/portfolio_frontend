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

    useEffect(() => {
        fetch(`${API_BASE_URL}/feed/md-list`)
            .then(res => res.json())
            .then(setItems);
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
            <div className="grid gap-6">
            {items.map((item, idx) => (
                <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between bg-white p-2 sm:lg:p-6 rounded-2xl shadow transition hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
                >
                <div >
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-3 line-clamp-1 sm:lg:line-clamp-3" dangerouslySetInnerHTML={{ __html: item.html }} />

                </div>
                </a>
            ))}
            </div>
        </div>
            </>
    );

}
