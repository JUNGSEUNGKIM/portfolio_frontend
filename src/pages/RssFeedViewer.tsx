import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config';
export default function RssFeedViewer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/feed/md-list`)
            .then(res => res.json())
            .then(setItems);
    }, []);

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Markdown Files</h1>
            {items.map((item, idx) => (
                <div key={idx} className="border p-4 rounded shadow">
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold">
                        {item.title}
                    </a>
                    <div dangerouslySetInnerHTML={{ __html: item.html }} />
                </div>
            ))}
        </div>
    );

}
