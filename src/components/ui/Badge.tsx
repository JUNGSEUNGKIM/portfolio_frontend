import { IconType } from "react-icons";

interface BadgeProps {
    bg: string;
    color: string;
    Icon: IconType;
    label: string;
}

export function Badge({ bg, color, Icon, label }: BadgeProps) {
    return (
        <div className="relative group">
            <div className={`flex justify-center gap-3 px-auto py-2 rounded-lg w-12 ${bg} ${color}`}>
                <Icon size={24} />
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {label}
            </div>
        </div>
    );
}