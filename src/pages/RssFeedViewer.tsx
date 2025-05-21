import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config';
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
    );

}
