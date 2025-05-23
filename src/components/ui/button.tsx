import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded-md font-medium transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
