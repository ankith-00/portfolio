import { motion } from "framer-motion";

// REACT-ICONS
import { BsDownload } from "react-icons/bs";

// STYLES
import { WhitBtnWithIcon, Container, ContainerContent, HeroCard } from "../utils/CommonStyles";

// COMPONENTS
import Navbar from "../components/Navbar";
import Status from "../components/Status"
import { ScrambleText } from '../components/ScrambleText'
import Social from "../components/Social";
import SkillsMarquee from '../components/SkilMarquee';


import Projects from '../components/Projects'

import Experience from "../components/Experience";


import Connect from "../components/Connect";





// FRAMER-MOTION VARIENT
const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


// UI
export default function Mobile() {

    return (
        <>
            <div style={Container}>
                <Navbar />

                {/* CONTAINER-CONTENT */}
                <div style={ContainerContent}>


                    {/* HERO CARD*/}
                    <div style={HeroCard}>
                        <div className="plus p-top-left">       </div>
                        <div className="plus p-top-right">      </div>
                        <div className="plus p-bottom-left">    </div>
                        <div className="plus p-bottom-right">   </div>


                        {/* STAUS - INDICATOR */}
                        <Status />

                        {/* SCRUMBLE TEXT  */}
                        <div style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            color: "#fff",

                        }}>
                            <ScrambleText text="HI, I AM ANKITH" />

                            <motion.div
                                variants={fadeUpVariant}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 6.5, duration: 0.6 }}
                            >
                                <p style={{
                                    fontFamily: "var(--poppins)",
                                    fontSize: "4cqw",
                                    padding: "0.9em 0.5em 0 0.5em",
                                    textAlign: "center",

                                }}>Build High Performance API's & Smart Models That Grow With Your Data</p>

                            </motion.div>
                        </div>

                        {/* SOCIAL MEDIA ICONS */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 7.1, duration: 0.6 }}
                        >
                            <Social />
                        </motion.div>


                        {/* DOWNLOAD RESUME BUTTON */}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 7.7, duration: 0.6 }}
                        >
                            <button style={WhitBtnWithIcon}><BsDownload size={18} /> Download &nbsp;Resume</button>
                        </motion.div>
                    </div>
                </div>

                {/* SKILLS */}
                <SkillsMarquee />

                {/* PROJECTS */}
                <Projects />

                {/* EXPERINCE */}
                <Experience />

                {/* FOOTER */}
                <Connect />

            </div>
        </>
    )
}