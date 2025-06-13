// import  { useRef } from 'react';
// import { Editor } from '@toast-ui/react-editor';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import axios from 'axios';
//
// export default function PostForm() {
//     const editorRef = useRef();
//
//     const handleSubmit = async () => {
//         const title = document.getElementById('title-input').value;
//         const content = editorRef.current.getInstance().getHTML();
//
//         console.log(title)
//         console.log(content)
//         alert(content)
//
//         try {
//             const res = await axios.post('/api/posts', { title, content });
//             alert('글이 성공적으로 등록되었습니다.');
//         } catch (err) {
//             console.error(err);
//             alert('글 등록에 실패했습니다.');
//         }
//     };
//
//     return (
//         <div className="max-w-3xl mx-auto p-6 space-y-6">
//             <h1 className="text-2xl font-bold">📝 게시글 작성</h1>
//             <input
//                 id="title-input"
//                 type="text"
//                 placeholder="제목을 입력하세요"
//                 className="w-full p-2 border border-gray-300 rounded"
//             />
//             <Editor
//                 ref={editorRef}
//                 previewStyle="vertical"
//                 height="400px"
//                 initialEditType="wysiwyg"
//                 useCommandShortcut={true}
//                 hooks={{
//                     addImageBlobHook: async (blob, callback) => {
//                         const formData = new FormData();
//                         formData.append('image', blob);
//
//                         try {
//                             const res = await axios.post('http://localhost:3000/image', formData);
//                             callback(res.data.imageUrl, '이미지');
//                         } catch (err) {
//                             console.error('이미지 업로드 실패', err);
//                             alert('이미지 업로드에 실패했습니다.');
//                         }
//                     },
//                 }}
//             />
//             {/*<Editor*/}
//             {/*    ref={editorRef}*/}
//             {/*    previewStyle="vertical"*/}
//             {/*    height="400px"*/}
//             {/*    initialEditType="wysiwyg"*/}
//             {/*    useCommandShortcut={true}*/}
//             {/*    hooks={{*/}
//             {/*        addImageBlobHook: async (blob, callback) => {*/}
//             {/*            const tempUrl = URL.createObjectURL(blob);*/}
//             {/*            callback(tempUrl, '임시 이미지');*/}
//             {/*            return false; // 서버 업로드 방지*/}
//             {/*        },*/}
//             {/*    }}*/}
//             {/*/>*/}
//             <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//             >
//                 등록하기
//             </button>
//         </div>
//     );
// }
import { useRef, useState, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';

export default function PostForm() {
    const editorRef = useRef<Editor | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [titleImageUrl, setTitleImageUrl] = useState<string | null>(null);

    const [previewData, setPreviewData] = useState<{
        title: string;
        subtitle: string;
        category: string;
        startDate: string;
        endDate: string;
        content: string;
        image: File | null;
        status: string;
        duration: string;
        stacks: string[];
        imageUrl: string | null;
    } | null>(null);

    useEffect(() => {
        if (!previewData?.startDate || !previewData?.endDate) return;
        const start = new Date(previewData.startDate);
        const end = new Date(previewData.endDate);
        const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

        setPreviewData((prev) => {
            if (!prev) return prev;
            return { ...prev, duration: diff + '일' };
        });
    }, [previewData?.startDate, previewData?.endDate]);

    const handleSubmit = async () => {
        const title = (document.getElementById('title-input') as HTMLInputElement)?.value || '';
        const subtitle = (document.getElementById('subtitle-input') as HTMLInputElement)?.value || '';
        const category = (document.getElementById('category-select') as HTMLSelectElement)?.value || '';
        const startDate = (document.getElementById('start-date') as HTMLInputElement)?.value || '';
        const endDate = (document.getElementById('end-date') as HTMLInputElement)?.value || '';
        const image = (document.getElementById('image-upload') as HTMLInputElement)?.files?.[0] || null;
        const content = editorRef.current?.getInstance().getHTML() || '';
        const status = endDate === '' ? '진행중' : '완료';

        let uploadedImageUrl: string | null = null;
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            try {
                const res = await axios.post('https://core.arami.kr/image', formData);
                uploadedImageUrl = res.data.imageUrl;
                setTitleImageUrl(uploadedImageUrl);
                console.log(titleImageUrl);
            } catch (err) {
                console.error('타이틀 이미지 업로드 실패', err);
                alert('타이틀 이미지 업로드에 실패했습니다.');
            }
        }

        setPreviewData({
            title,
            subtitle,
            category,
            startDate,
            endDate,
            content,
            image,
            status,
            duration: '',
            stacks: selectedStacks,
            imageUrl: uploadedImageUrl,
        });
        setModalOpen(true);
    };

    const handleSaveToServer = async () => {
        if (!previewData) return;

        try {
            // const response =
            await axios.post('https://core.arami.kr/posts', {
                title: previewData.title,
                subtitle: previewData.subtitle,
                category: previewData.category,
                start_date: previewData.startDate,
                end_date: previewData.endDate,
                content: previewData.content,
                status: previewData.status,
                duration: previewData.duration,
                stacks: previewData.stacks,
                image_url: previewData.imageUrl,
            });

            alert('저장 성공! 🎉');
            setModalOpen(false);
        } catch (error) {
            console.error('저장 실패:', error);
            alert('저장에 실패했습니다.');
        }
    };

    const techList = [
        'Java', 'TypeScript', 'JavaScript', 'Python',
        'Spring Boot', 'NestJS', 'FastAPI', 'Node.js',
        'React', 'Next.js', 'Flutter',
        'Docker', 'GitHub Actions', 'Nginx', 'Ubuntu',
        'Oracle', 'MySQL', 'PostgreSQL', 'TypeORM',
        'OpenCV', 'MediaPipe', 'FFmpeg',
        'IntelliJ', 'DataGrip', 'PyCharm'
    ];

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold">📝 게시글 작성</h1>
            <input id="title-input" type="text" placeholder="제목을 입력하세요" className="w-full p-2 border border-gray-300 rounded" />
            <textarea id="subtitle-input" placeholder="서브타이틀을 입력하세요 (10줄 내외)" rows={4} className="w-full p-2 border border-gray-300 rounded" />
            <div>
                <label className="block text-sm font-medium mb-1">카테고리</label>
                <select id="category-select" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">카테고리를 선택하세요</option>
                    <option value="프로젝트">프로젝트</option>
                    <option value="사이드프로젝트">사이드프로젝트</option>
                    <option value="디자인">디자인</option>
                    <option value="공부">공부</option>
                </select>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">작업 시작일</label>
                    <input type="date" id="start-date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">작업 종료일</label>
                    <input type="date" id="end-date" className="w-full p-2 border border-gray-300 rounded" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">타이틀 이미지 업로드</label>
                <input type="file" id="image-upload" accept="image/*" className="w-full" />
            </div>
            <div>
                <h2 className="font-semibold text-sm mb-2">사용한 기술 스택을 선택하세요</h2>
                <div className="flex flex-wrap gap-2">
                    {techList.map((tech) => (
                        <label key={tech} className="flex items-center space-x-1 text-sm">
                            <input
                                type="checkbox"
                                value={tech}
                                checked={selectedStacks.includes(tech)}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    setSelectedStacks((prev) =>
                                        checked ? [...prev, tech] : prev.filter((item) => item !== tech)
                                    );
                                }}
                            />
                            <span>{tech}</span>
                        </label>
                    ))}
                </div>
            </div>
            <Editor
                ref={editorRef}
                previewStyle="vertical"
                height="400px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                hooks={{
                    addImageBlobHook: async (blob: Blob, callback: (url: string, altText?: string) => void) => {
                        const formData = new FormData();
                        formData.append('image', blob);
                        try {
                            const res = await axios.post('https://core.arami.kr/image', formData);
                            callback(res.data.imageUrl, '이미지');
                        } catch (err) {
                            console.error('이미지 업로드 실패', err);
                            alert('이미지 업로드에 실패했습니다.');
                        }
                    },
                }}
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                등록 확인
            </button>

            {modalOpen && previewData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex overflow-y-scroll items-center justify-center z-50">
                    <div className="bg-white max-w-full w-full p-6 rounded shadow-lg space-y-4 relative pb-48">
                        <h2 className="text-xl font-bold">{previewData.title || '(제목 없음)'}</h2>
                        <p className="text-gray-700 whitespace-pre-line">{previewData.subtitle}</p>
                        <div className="text-sm text-gray-500">
                            <p>카테고리: {previewData.category || '-'}</p>
                            <p>시작일: {previewData.startDate || '-'}</p>
                            <p>종료일: {previewData.endDate || '-'}</p>
                            <p>소요 기간: {previewData.duration || '-'}</p>
                            <p>진행 상태: {previewData.status}</p>
                            <p>사용 기술: {previewData.stacks.join(', ')}</p>
                        </div>
                        {previewData.imageUrl && (
                            <img src={previewData.imageUrl} alt="타이틀 이미지" className="w-full max-w-md rounded" />
                        )}
                        <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: previewData.content }} />


                        <h2 className="text-xl font-bold">{previewData.title || '(제목 없음)'}</h2>
                        <p className="text-gray-700 whitespace-pre-line">{previewData.subtitle}</p>
                        <div className="text-sm text-gray-500">
                            <p>카테고리: {previewData.category || '-'}</p>
                            <p>시작일: {previewData.startDate || '-'}</p>
                            <p>종료일: {previewData.endDate || '-'}</p>
                            <p>소요 기간: {previewData.duration || '-'}</p>
                            <p>진행 상태: {previewData.status}</p>
                            <p>사용 기술: {previewData.stacks.join(', ')}</p>
                        </div>
                        {previewData.imageUrl && (
                            <img src={previewData.imageUrl} alt="타이틀 이미지" className="w-full max-w-md rounded" />
                        )}
                        <div className="flex justify-end gap-2">
                            <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setModalOpen(false)}>닫기</button>
                            {/*<button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => {*/}
                            {/*    alert('임시 저장 완료 (DB 저장은 아직)');*/}
                            {/*    setModalOpen(false);*/}
                            {/*}}>*/}
                            {/*    임시저장*/}
                            {/*</button>*/}
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                onClick={handleSaveToServer}
                            >
                                저장하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


