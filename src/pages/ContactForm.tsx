import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {motion} from "framer-motion";

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_7qnkarn',   // 🔁 서비스 ID
                'template_zfd9gb6',  // 🔁 템플릿 ID
                form.current!,
                'qRSbH0A2m7LEcD59X'    // 🔁 퍼블릭 키
            )
            .then(() => {
                setSent(true);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                alert("메일 전송에 실패했습니다.");
                setLoading(false);
            });
    };

    return (
        <>
            <div className="bg-white  max-w-full overflow-y-auto">
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
                </motion.div>
            </div>

           <div className="h-10">dd</div>

            <div className=" flex flex-col items-center justify-center px-6 py-16 ">

                <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
                {sent ? (
                    <p className="text-green-600 text-lg">메일이 성공적으로 전송되었습니다!</p>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="w-full max-w-md space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="이름"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="이메일"
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded"
                        />
                        <textarea
                            name="message"
                            placeholder="내용을 입력해주세요"
                            rows={5}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? '전송 중...' : '메일 보내기'}
                        </button>
                    </form>
                )}
            </div>

        </>

);
}
