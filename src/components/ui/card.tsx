import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={`rounded-xl border p-2 shadow-md ${className}`}
            {...props}  // ⭐ 여기 중요
        >
            {children}
        </div>
    );
};

export const CardContent = ({ children, className }: CardProps) => {
    return (
        <div className={`p-2 ${className}`}>
            {children}
        </div>
    );
};