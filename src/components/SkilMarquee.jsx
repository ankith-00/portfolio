import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

// SKILL ICONS (Imports kept same)
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";
import { SiGoogleappsscript } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiStreamlit } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiReactquery } from "react-icons/si";

export default function SkillsMarquee({ speed = 15 }) {
    const skills = [
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "ReactJS", icon: IoLogoReact },
        { name: "React Query", icon: SiReactquery },
        { name: "NextJS", icon: RiNextjsFill },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Shadcn", icon: SiShadcnui},
        { name: "Python", icon: FaPython },
        { name: "Streamlit", icon: SiStreamlit},
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: SiFlask  },
        { name: "MongoDB", icon: DiMongodb },
        { name: "Supabase", icon: RiSupabaseFill  },
        { name: "Postgress", icon: BiLogoPostgresql },
        { name: "Git", icon: FaGitAlt},
        { name: "Docker", icon: FaDocker },  
        { name: "GASZ", icon: SiGoogleappsscript },  
    ];

    // Splitting skills into two distinct groups
    const half = Math.ceil(skills.length / 2);
    const firstGroup = skills.slice(0, half);
    const secondGroup = skills.slice(half);

    const renderRow = (rowSkills) => (
        <div style={{ display: "flex", gap: "2em", paddingRight: "2em" }}>
            {rowSkills.map((skill, index) => (
                <SkillBadge 
                    key={index} 
                    BadgeName={skill.name} 
                    IconName={skill.icon} 
                />
            ))}
        </div>
    );

    return (
        <div style={containerStyle}>
            <div style={leftBlackShadow} />

            {/* ROW 1 : MOVES LEFT (Displays First Half) */}
            <motion.div 
                style={rowStyle}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                {/* We render the SAME group twice for a perfect loop */}
                {renderRow(firstGroup)}
                {renderRow(firstGroup)}
            </motion.div>

            {/* ROW 2 : MOVES RIGHT (Displays Second Half) */}
            <motion.div 
                style={{ ...rowStyle, marginTop: "2em" }}
                animate={{ x: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                {/* We render the SAME group twice for a perfect loop */}
                {renderRow(secondGroup)}
                {renderRow(secondGroup)}
            </motion.div>

            <div style={rightBlackShadow} />
        </div>
    );
}

// CSS STYLES (No changes made to your naming or logic)
const containerStyle = {
    width: "100%",
    backgroundColor: "#09090B",
    overflowX: "hidden",
    overflowY: "hidden",
    position: "relative",
    padding: "40px 0",
    display: "block",   
};

const rowStyle = {
    display: "flex", 
    width: "max-content",
    userSelect: "none",
};

const leftBlackShadow = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80px",
    height: "100%",
    zIndex: 2,
    background: "linear-gradient(to right, #09090B 20%, transparent)",
    pointerEvents: "none",
};

const rightBlackShadow = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "80px",
    height: "100%",
    zIndex: 2,
    background: "linear-gradient(to left, #09090B 20%, transparent)",
    pointerEvents: "none",
};