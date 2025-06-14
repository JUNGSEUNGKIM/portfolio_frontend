import {
    FaJava, FaPython, FaReact, FaDocker, FaNodeJs,
} from "react-icons/fa";
import {
    SiTypescript, SiJavascript, SiSpring, SiNestjs, SiFastapi, SiNextdotjs, SiFlutter,
    SiMysql, SiPostgresql, SiOracle, SiGithubactions, SiNginx, SiUbuntu, SiOpencv, SiGoogle, SiFfmpeg,
    SiIntellijidea, SiDatagrip, SiPycharm, SiTypeorm,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface TechMeta {
    bg: string;
    color: string;
    Icon: IconType;
    category: string;
}

export const techMap: Record<string, TechMeta> = {
    "Java": { bg: "bg-[#007396]", color: "text-white", Icon: FaJava, category: "Languages" },
    "Python": { bg: "bg-[#3776AB]", color: "text-white", Icon: FaPython, category: "Languages" },
    "JavaScript": { bg: "bg-[#F7DF1E]", color: "text-black", Icon: SiJavascript, category: "Languages" },
    "TypeScript": { bg: "bg-[#3178C6]", color: "text-white", Icon: SiTypescript, category: "Languages" },

    "Spring Boot": { bg: "bg-[#6DB33F]", color: "text-white", Icon: SiSpring, category: "Backend" },
    "NestJS": { bg: "bg-[#E0234E]", color: "text-white", Icon: SiNestjs, category: "Backend" },
    "FastAPI": { bg: "bg-[#009688]", color: "text-white", Icon: SiFastapi, category: "Backend" },
    "Node.js": { bg: "bg-[#339933]", color: "text-white", Icon: FaNodeJs, category: "Backend" },

    "React": { bg: "bg-[#61DAFB]", color: "text-black", Icon: FaReact, category: "Frontend" },
    "Next.js": { bg: "bg-[#000000]", color: "text-white", Icon: SiNextdotjs, category: "Frontend" },
    "Flutter": { bg: "bg-[#02569B]", color: "text-white", Icon: SiFlutter, category: "Frontend" },

    "Docker": { bg: "bg-[#2496ED]", color: "text-white", Icon: FaDocker, category: "DevOps" },
    "GitHub Actions": { bg: "bg-[#2088FF]", color: "text-white", Icon: SiGithubactions, category: "DevOps" },
    "Nginx": { bg: "bg-[#009639]", color: "text-white", Icon: SiNginx, category: "DevOps" },
    "Ubuntu": { bg: "bg-[#E95420]", color: "text-white", Icon: SiUbuntu, category: "DevOps" },

    "MySQL": { bg: "bg-[#4479A1]", color: "text-white", Icon: SiMysql, category: "Database" },
    "PostgreSQL": { bg: "bg-[#336791]", color: "text-white", Icon: SiPostgresql, category: "Database" },
    "Oracle": { bg: "bg-[#F80000]", color: "text-white", Icon: SiOracle, category: "Database" },
    "TypeORM": { bg: "bg-[#FF0000]", color: "text-white", Icon: SiTypeorm, category: "Database" },

    "OpenCV": { bg: "bg-[#5C3EE8]", color: "text-white", Icon: SiOpencv, category: "Media" },
    "MediaPipe": { bg: "bg-[#FF6F00]", color: "text-white", Icon: SiGoogle, category: "Media" },
    "FFmpeg": { bg: "bg-[#007808]", color: "text-white", Icon: SiFfmpeg, category: "Media" },

    "IntelliJ": { bg: "bg-[#000000]", color: "text-white", Icon: SiIntellijidea, category: "Tools" },
    "DataGrip": { bg: "bg-[#21D789]", color: "text-black", Icon: SiDatagrip, category: "Tools" },
    "PyCharm": { bg: "bg-[#3776AB]", color: "text-white", Icon: SiPycharm, category: "Tools" },
};