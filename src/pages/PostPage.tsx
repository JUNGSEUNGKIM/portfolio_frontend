// src/pages/PostPage.tsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StackBadgeList } from '@/components/ui/StackBadgeList';
import {API_BASE_URL} from "@/config.ts";
import { motion } from "framer-motion";
interface PreviewData {
    title?: string;
    subtitle?: string;
    category?: string;
    start_date?: string;
    end_date?: string;
    duration?: string;
    status?: string;
    stacks: string[];
    image_url?: string | null;
    content: string;
}

const PostPage = () => {
    const { id } = useParams();
    const [previewData, setPreviewData] = useState<PreviewData | null>(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/posts/${id}`)
            .then((res) => res.json())
            .then(setPreviewData);
    }, [id]);

    if (!previewData) return <div className="p-10 text-center">Loading...</div>;

    if (!previewData.start_date ) return null;
    const start = new Date(previewData.start_date);
    // const end = new Date(previewData.end_date);
    // const end = previewData.end_date ? new Date(previewData.end_date) : null;
    // if (previewData.end_date) {
    //     end = new Date(previewData.end_date);
    // }
    // const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    let end: Date | null = null;

    if (previewData.end_date) {
        end = new Date(previewData.end_date);
    }else {
        end = new Date(); // 오늘 날짜로 대체
    }

// end가 null이 아닌 경우에만 diff 계산
    const diff = end
        ? Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
        : null;

    return (
        // <div className="bg-white w-11/12 max-w-6xl mx-auto mt-12 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] p-6">
        <div className="">
            <div className="bg-white  max-w-full overflow-y-auto">
                {/* 상단: 이미지 + 정보 2단 구성 */}
                <motion.div
                    className="shadow-md bg-white min-h-80 py-12"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:0.5,duration: 0.6}}
                >
                {/*<div className="shadow-md bg-white min-h-80 py-12">*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto ">
                        {/* 왼쪽 정보 */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{delay: 0.7,  duration: 0.6 }}
                            className="flex flex-col justify-between sm:pr-12 p-2"
                        >
                            <div className="flex flex-col justify-center flex-grow">
                                <h1 className="text-4xl font-extrabold text-center text-gray-900">
                                   [ {previewData.title?.split("-")[0] || '(제목 없음)'} ]
                                </h1>
                                <h1 className="text-xl font-extrabold text-center mb-6 text-gray-400">
                                    {previewData.title?.split("-")[1] }
                                </h1>

                                <div className="text-sm text-gray-600 mb-2">
                                    <div className="sm:flex sm:justify-between mb-1">
                                        <p>📂 <b>카테고리:</b> {previewData.category || '-'}</p>
                                        <div className="flex gap-x-2">
                                            <p>📅 {previewData.start_date}</p>
                                            <p>-</p>
                                            <p>{previewData.end_date}</p>
                                        </div>
                                    </div>
                                    <div className="flex sm:justify-end gap-x-4">
                                        <p><b>소요 기간:</b> {diff} 일</p>
                                        <p><b>진행 상태:</b> {previewData.status || '-'}</p>
                                    </div>
                                </div>

                                <hr className="my-1 mb-4 border-gray-300"/>

                                <p className="text-gray-700 whitespace-pre-line mb-6 text-base text-left">
                                    {previewData.subtitle}
                                </p>
                            </div>

                            <div className="mt-auto pt-8">
                                <h3 className="font-semibold text-sm text-gray-700 mb-2 text-left"></h3>
                                <StackBadgeList stacks={previewData.stacks}/>
                            </div>
                        </motion.div>

                        {/* 오른쪽 이미지 */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{delay: 0.7, duration: 0.6 }}
                            className="w-full flex justify-center sm:pl-12 h-full"
                        >
                            {previewData.image_url && (
                                <div className="aspect-[16/9] w-full max-w-3xl flex justify-center items-center">
                                    <img
                                        src={previewData.image_url}
                                        alt="타이틀 이미지"
                                        className="w-full object-cover rounded shadow-md"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
                {/* 본문 */}
                <motion.div
                    className="mt-8 max-w-screen-lg mx-auto"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.0, duration: 0.8}}
                >
                {/*<div className="mt-8 max-w-screen-lg mx-auto">*/}
                    <div
                        className="prose prose-sm max-w-full text-gray-800 text-left p-2 mt-32"
                        dangerouslySetInnerHTML={{__html: previewData.content}}
                    />
                </motion.div>
            </div>
        </div>

    );
};

export default PostPage;
