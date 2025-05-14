import { useEffect, useState } from 'react'

interface RssPost {
    title: string
    link: string
    pubDate: string
    contentSnippet: string
}

export default function RssFeedInReact() {
    const [posts, setPosts] = useState<RssPost[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/rss')
            .then((res) => res.json())
            .then(setPosts)
            .catch(console.error)
    }, [])

    return (
        <div className="grid gap-4">
            {posts.map((post, index) => (
                <a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                >
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {post.contentSnippet}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                </a>
            ))}
        </div>
    )
}
