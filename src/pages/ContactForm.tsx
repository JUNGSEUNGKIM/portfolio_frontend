import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

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
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white">
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
);
}
