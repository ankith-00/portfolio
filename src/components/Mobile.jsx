import { delay, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Status from "../components/Status"
import { ScrambleText } from '../components/ScrambleText'
import Social from "../components/Social";
import Projects from './Projects'

import SkillsMarquee from '../components/SkilMarquee';


import { BsDownload } from "react-icons/bs";
import Experience from "./Experience";
import Connect from "./Connect";





// FRAMER-MOTION VARIENT
const fadeUpVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  }
};




export default function Mobile(){

    return(
        <>
        <div className="container">
            <Navbar/>

            {/* CONTENT=CONTAINER */}
            <div style={{
                    width:"92%",
                    height: "92vh",
                    display: "flex",
                    flexDirection: "column",
                    // background:"red",
                    paddingTop: "7.5em"
                }}
            >
                {/* BOX WITH + SIGN */}
                <div style={{
                        height: "75svh",
                        position: 'relative',
                        border: "1px solid #141414ff",
                        backgroundImage: "radial-gradient(#171717 1px, transparent 1px)",
                        backgroundSize: "20px 20px",

                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"space-around",
                        alignItems: "center",
                        padding: "1em 1em"

                    }}
                >
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>
                    

                    {/* STAUS - INDICATOR */}
                    <Status/>

                    {/* SCRUMBLE TEXT  */}
                    <div style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        color: "#fff",

                    }}>
                        <ScrambleText text="HI, I AM ANKITH"/>

                        <motion.div 
                            variants={fadeUpVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 6.5, duration: 0.6}}
                        >
                            <p style={{
                                fontFamily: "var(--poppins)",
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
                        transition={{delay: 7.1, duration: 0.6}}
                    >
                        <Social/>
                    </motion.div>
                    
                        
                    {/* CALL TO ACTION BUTTONS */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 7.7, duration: 0.6}}
                    >
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1em",

                        }}>
                            <button style={{
                                width: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "0.7em",
                                fontFamily: "var(--poppins)",
                                fontSize: "1.1em",
                                background: "#fff",
                                padding: "0.4em 1.5em",
                                borderRadius: "0.7em",
                                border: "none",

                            }}><BsDownload size={18}/> Resume</button>

                            <button style={{
                                width: "50%",
                                fontFamily: "var(--poppins)",
                                fontSize: "1.1em",
                                background: "#323232ff",
                                backdropFilter: "blur(5px)",
                                padding: "0.4em 2em",
                                color: "#fff",
                                borderRadius: "0.7em",
                                border: "none",

                            }}>Connect</button>
                            
                        </div>
                    </motion.div>
                </div>    
            </div>
            
            {/* SKILLS */}
            <div style={{
                width: "100%",
                height: "fit-content",
                background: "#09090B",
                marginTop: "0em",
            }}> 

                <h2 className="heading">SKILLS</h2>
                <SkillsMarquee/> <br />
            </div>

            {/* PROJECTS */}
            <Projects/>

            <Experience/>
            <Connect/>




        </div>
        </>
    )
}