import { useState } from "react";

const SplitFace = () => {
    const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Based image always visible */}
            <img
                src="/3.png"
                alt="Base Face"
                // className="absolute inset-0 w-full h-full object-cover z-0"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-0 ${
                    hovered === null ? "opacity-100" : "opacity-0"
                }`}
            />

            <img
                src="/1.png"
                alt="Designer"
                className={`absolute inset-0 w-1/2 h-full object-cover transition-opacity duration-500 ease-in-out z-10 ${
                    hovered === "left" ? "opacity-100" : "opacity-0"
                }`}
            />

            <img
                src="/2.png"
                alt="Coder"
                className={`absolute inset-y-0 right-0 w-1/2 h-full object-cover transition-opacity duration-500 ease-in-out z-10 ${
                    hovered === "right" ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Overlay to track mouse movement */}
            <div
                className="absolute inset-0 z-20"
                onMouseMove={(e) => {
                    const x = e.clientX;
                    const midpoint = window.innerWidth / 2;
                    setHovered(x < midpoint ? "left" : "right");
                }}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Left text */}
                {hovered === "left" && (
                    <div className="absolute bottom-10 left-10 text-black z-30">
                        <h1 className="text-4xl font-bold">designer</h1>
                        <p className="mt-2 text-lg max-w-xs">
                            Product designer specialising in UI design and design systems.
                        </p>
                    </div>
                )}

                {/* Right text */}
                {hovered === "right" && (
                    <div className="absolute bottom-10 right-10 text-black text-right z-30">
                        <h1 className="text-4xl font-bold">
                            <span className="text-gray-300">&lt;</span>coder<span className="text-gray-300">&gt;</span>
                        </h1>
                        <p className="mt-2 text-lg max-w-xs ml-auto">
                            Front end developer who writes clean, elegant and efficient code.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SplitFace;
