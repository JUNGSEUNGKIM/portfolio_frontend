import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={`rounded-2xl border p-4 shadow-md ${className}`}
            {...props}  // ⭐ 여기 중요
        >
            {children}
        </div>
    );
};

export const CardContent = ({ children, className }: CardProps) => {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    );
};