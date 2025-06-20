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
import {API_BASE_URL} from "@/config.ts";
import PostPreviewModal from "@/components/board/PostPreviewModal.tsx";

export default function PostForm() {
    const editorRef = useRef<Editor | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [titleImageUrl, setTitleImageUrl] = useState<string | null>(null);

    const [previewData, setPreviewData] = useState<{
        title: string;
        subtitle: string;
        category: string;
        start_date: string;
        end_date: string;
        content: string;
        image: File | null;
        status: string;
        duration: string;
        stacks: string[];
        image_url: string | null;
    } | null>(null);

    useEffect(() => {
        if (!previewData?.start_date ) return;
        const start = new Date(previewData.start_date);
        const end = new Date(previewData.end_date);
        const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

        setPreviewData((prev) => {
            if (!prev) return prev;
            return { ...prev, duration: diff + '일' };
        });
    }, [previewData?.start_date, previewData?.end_date]);

    const handleSubmit = async () => {
        const title = (document.getElementById('title-input') as HTMLInputElement)?.value || '';
        const subtitle = (document.getElementById('subtitle-input') as HTMLInputElement)?.value || '';
        const category = (document.getElementById('category-select') as HTMLSelectElement)?.value || '';
        const start_date = (document.getElementById('start-date') as HTMLInputElement)?.value || '';
        const end_date = (document.getElementById('end-date') as HTMLInputElement)?.value || '';
        const image = (document.getElementById('image-upload') as HTMLInputElement)?.files?.[0] || null;
        const content = editorRef.current?.getInstance().getHTML() || '';
        const status = end_date === '' ? '진행중' : '완료';

        let uploadedImageUrl: string | null = null;
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            try {
                const res = await axios.post(`${API_BASE_URL}/image`, formData);
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
            start_date,
            end_date,
            content,
            image,
            status,
            duration: '',
            stacks: selectedStacks,
            image_url: uploadedImageUrl,
        });
        setModalOpen(true);
        console.log(modalOpen)
        console.log(previewData)
    };

    const handleSaveToServer = async () => {
        if (!previewData) return;

        try {
            // const response =
            await axios.post(`${API_BASE_URL}/posts`, {
                title: previewData.title,
                subtitle: previewData.subtitle,
                category: previewData.category,
                start_date: previewData.start_date,
                end_date: previewData.end_date,
                content: previewData.content,
                status: previewData.status,
                duration: previewData.duration,
                stacks: previewData.stacks,
                image_url: previewData.image_url,
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
        'IntelliJ', 'DataGrip', 'PyCharm', 'EJS', 'jQuery', 'HTML', 'CSS'
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
                            const res = await axios.post(`${API_BASE_URL}/image`, formData);
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
                <PostPreviewModal
                    modalOpen={modalOpen}
                    previewData={previewData}
                    onClose={() => setModalOpen(false)}
                    onSave={handleSaveToServer}
                />
            )}
        </div>
    );
}


