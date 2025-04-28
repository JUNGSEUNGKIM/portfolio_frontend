import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`rounded-2xl border p-4 shadow-md ${className}`}>
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
