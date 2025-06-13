import {useState} from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";
interface PostPreviewProps {
    image: string;
    title: string;
    category: string;
    description: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({ image, title, category, description }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            className="bg-white rounded-3xl shadow hover:shadow-lg transition w-5/6 max-w-sm mx-auto cursor-pointer"
            onClick={() => setExpanded(!expanded)}
        >
            <img
                src={image}
                alt={title}
                className="w-full min-h-56 max-h-56 object-cover rounded-2xl shadow"
            />
            <CardContent className={`px-1 transition-all duration-300 ${expanded ? "max-h-[30vh]" : "max-h-28 overflow-hidden"}`}>
                <p className="truncate text-l mb-1 text-black">{title}</p>
                <p className="text-black text-sm">{category}</p>
                <p className={`text-black text-sm hidden ${expanded ? "" : "line-clamp-3"}`}>
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default PostPreview;
