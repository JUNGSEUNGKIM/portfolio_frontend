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
            <div className="bg-white  max-w-full">
                <motion.div
                    className="shadow-md z-10 bg-white min-h-64 py-12"
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
                                <h1 className="text-6xl sm:text-8xl font-extrabold text-center text-gray-900 mb-4">
                                    CONTACT
                                </h1>
                                <div className="flex flex-col text-left mt-12 text-gray-700 leading-loose text-sm sm:text-base md:text-lg gap-2 max-w-2xl mx-auto px-4">
                                    <p>저에겐 다양한 경험이 있습니다.</p>
                                    <p>
                                         매일 배우고 성장하며 실력을 쌓아가고 있습니다.
                                    </p>
                                    <p>
                                        <strong>업무 외 시간에도 프로젝트를 진행할 만큼</strong> 열정과 몰입을 가지고 있습니다.
                                    </p>
                                    <p>
                                        함께할 때 더 큰 시너지를 낼 수 있다고 믿고, 협업을 소중히 여깁니다.
                                    </p>
                                    <p>
                                        부족한 부분은 <strong>성실함과 끈기</strong>로 채워 나가겠습니다.
                                    </p>
                                    <p>
                                        <strong>당신과 함께 성장할 수 있는 날을 기다리고 있습니다.</strong>
                                    </p>
                                </div>
                            </div>


                        </motion.div>

                        {/* 오른쪽 이미지 */}
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.7, duration: 0.6}}
                            className="w-4/5 h-4/5 flex justify-center mx-auto my-auto sm:pl-12"
                        >

                            <img
                                src="https://storage.arami.kr/uploads/1749772408267-0da3c34f.jpeg"
                                alt="타이틀 이미지"
                                className="shadow-md filter grayscale rounded-full w-full h-full object-contain"
                            />

                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="w-full block p-2 my-4"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: 0.8}}
            >

            <div className=" flex flex-col items-center justify-center px-6 py-16 ">
                <h1 className="text-3xl font-extrabold text-left  text-gray-900 mb-4">

                </h1>

                {sent ? (
                    <p className="text-green-600 text-lg">메일이 성공적으로 전송되었습니다!</p>
                ) : (


                    <form ref={form} onSubmit={sendEmail} className="w-full max-w-3xl sm:space-x-4 grid sm:grid-cols-2">

                        <div className="w-full sm:space-y-2 flex flex-col gap-2 ">

                            <input
                                type="text"
                                name="name"
                                placeholder="이름"
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded h-full"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="이메일"
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded h-full"
                            />
                        </div>

                        <div className="w-full sm:space-y-2 flex flex-col gap-2 mt-4 sm:mt-0">

                        <textarea
                            name="message"
                            placeholder="내용을 입력해주세요"
                            rows={5}
                            required
                            className="w-full border border-gray-300 px-4 py-2 rounded"
                        />
                        </div>
                        <div></div>
                        <div className="w-full sm:space-y-2 flex flex-col gap-2 mt-4 sm:mt-0 ">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gray-500 mx-auto mt-12 w-full text-white font-bold py-2 rounded  hover:bg-black disabled:opacity-50"
                        >
                            {loading ? '전송 중...' : '메일 보내기'}
                        </button>
                        </div>
                    </form>
                )}
            </div>
            </motion.div>

        </>

);
}
