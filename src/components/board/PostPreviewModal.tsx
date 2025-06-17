import {StackBadgeList} from "@/components/ui/StackBadgeList.tsx";

interface PreviewData {
    title?: string;
    subtitle?: string;
    category?: string;
    start_date?: string;
    end_date?: string | null;
    duration?: string;
    status?: string;
    stacks: string[];
    image_url?: string | null;
    content: string;
}

interface PostPreviewModalProps {
    modalOpen: boolean;
    previewData: PreviewData | null;
    onClose: () => void;
    onSave: () => void;
}


const PostPreviewModal: React.FC<PostPreviewModalProps> = ({ modalOpen, previewData, onClose, onSave }) => {
    console.log(modalOpen)
    console.log(previewData)
    console.log(onClose)
    console.log(onSave)
    if (!modalOpen || !previewData) return null;

    console.log(previewData.stacks)

    if (!previewData?.start_date ) return;
    const start = new Date(previewData.start_date);
    // if (previewData.end_date === "") {
    //     previewData.end_date = null;
    // }
    // // const end = new Date(previewData.end_date);
    // const end = previewData.end_date ? new Date(previewData.end_date) : null;
    // const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    let end: Date | null = null;

    if (previewData.end_date) {
        end = new Date(previewData.end_date);
    }

// end가 null이 아닌 경우에만 diff 계산
    const diff = end
        ? Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
        : null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-11/12 max-w-6xl rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
                {/* 상단: 이미지 + 정보 2단 구성 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-2xl bg-white p-2">
                    {/* 왼쪽 정보 */}
                    <div className=" flex flex-col justify-between">
                        {/* 가운데 콘텐츠: 타이틀 + 날짜 + 서브타이틀 */}
                        <div className="flex flex-col justify-center flex-grow">
                            <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-900">
                                {previewData.title || '(제목 없음)'}
                            </h2>



                            <div className="text-sm text-gray-600 mb-2">
                                <div className="flex justify-between mb-1">
                                    <p>📂 <b>카테고리:</b> {previewData.category || '-'}</p>
                                    <div className="flex gap-x-2">
                                        <p>📅 {previewData.start_date || '-'}</p>
                                        <p>-</p>
                                        <p>{previewData.end_date || '-'}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-x-4">
                                    <p><b>소요 기간:</b> {diff || '-'} 일</p>
                                    <p><b>진행 상태:</b> {previewData.status || '-'}</p>
                                </div>
                            </div>
                            <hr className="my-1 mb-4 border-gray-300" />

                            <p className="text-gray-700 whitespace-pre-line mb-6 text-base text-left">
                                {previewData.subtitle}
                            </p>
                        </div>

                        {/* 맨 아래 스택 */}
                        <div className="mt-auto pt-8">
                            <h3 className="font-semibold text-sm text-gray-700 mb-2 text-left">사용 기술</h3>
                            <StackBadgeList stacks={previewData.stacks} />
                        </div>
                    </div>


                    {/* 오른쪽 이미지 */}
                    <div className="w-full flex justify-center">
                        {previewData.image_url && (
                            <img
                                src={previewData.image_url}
                                alt="타이틀 이미지"
                                className="w-1/2 rounded-xl shadow-md object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* 본문: 기술 스택 + content */}
                <div className="mt-8">


                    <div
                        className="prose prose-sm max-w-full text-gray-800 text-left p-2"
                        dangerouslySetInnerHTML={{ __html: previewData.content }}
                    />
                </div>

                {/* 하단 버튼 */}
                <div className="flex justify-end mt-6 gap-3">
                    <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition" onClick={onClose}>
                        닫기
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition" onClick={onSave}>
                        저장하기
                    </button>
                </div>
            </div>
        </div>
    );
};



export default PostPreviewModal;
