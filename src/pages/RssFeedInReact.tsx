import { useEffect, useState } from 'react'
import { API_BASE_URL } from '@/config';

interface RssPost {
    title: string
    link: string
    pubDate: string
    contentSnippet: string
}

export default function RssFeedInReact() {
    const [posts, setPosts] = useState<RssPost[]>([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/rss`)
        // fetch('https://core.arami.kr/api/rss')
            .then((res) => res.json())
            .then(setPosts)
            .catch(console.error)
    }, [])

    return (
        <div className="lg:p-24 sm:p-12 p-4 space-y-6">
            {/* 상단 카테고리 셀렉트 */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Tistory Blog</h2>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option value="all">전체</option>
                    <option value="tech">기술</option>
                    <option value="book">책</option>
                    <option value="life">라이프</option>
                </select>
            </div>
        <div className="grid gap-6">
            {posts.map((post, index) => (
                <a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between bg-white p-2 sm:lg:p-6 rounded-2xl shadow transition hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
                >
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-3 line-clamp-1 sm:lg:line-clamp-3">
                            {post.contentSnippet}
                        </p>
                    </div>
                    <div className="mt-4 text-right">
                        <p className="text-xs text-gray-400">
                            {new Date(post.pubDate).toLocaleDateString()}
                        </p>
                    </div>
                </a>
            ))}
        </div>
        </div>
    )
}



// <div className="p-4 space-y-6">
//     {/* 상단 카테고리 셀렉트 */}
//     <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold">Tistory Blog</h2>
//         <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option value="all">전체</option>
//             <option value="tech">기술</option>
//             <option value="book">책</option>
//             <option value="life">라이프</option>
//         </select>
//     </div>
//
//     {/* 블로그 카드 리스트 */}
//     {posts.map((post, idx) => (
//         <div key={idx} className="flex gap-4 border-b pb-4">
//             {/* 왼쪽 콘텐츠 */}
//             <div className="flex-1">
//                 {/* 작성자 정보 */}
//                 <div className="flex items-center gap-2 mb-1 text-sm text-gray-500">
//                     <img
//                         src={post.authorImg || "/default-profile.png"}
//                         alt="author"
//                         className="w-5 h-5 rounded-full"
//                     />
//                     <span className="font-semibold">{post.author}</span>
//                     <span className="text-xs text-gray-400">· {post.date}</span>
//                 </div>
//
//                 {/* 제목 */}
//                 <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
//
//                 {/* 본문 요약 */}
//                 <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.contentSnippet}</p>
//
//                 {/* 하단 버튼들 */}
//                 <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
//                     <span className="flex items-center gap-1">❤️ {post.likes || 0}</span>
//                     <span className="flex items-center gap-1">💬 {post.comments || 0}</span>
//                     <button className="ml-auto hover:text-gray-600">🔗 공유</button>
//                 </div>
//             </div>
//
//             {/* 오른쪽 썸네일 */}
//             <div className="w-28 h-20 rounded overflow-hidden">
//                 <img
//                     src={post.thumbnail || "/default-thumbnail.jpg"}
//                     alt="thumbnail"
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </div>
//     ))}
// </div>

