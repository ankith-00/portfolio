// FRAMER MOTION
import { motion } from "framer-motion";

// ICONS
import { MdDeviceHub } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

// COMPONENT
import Card from "./Card";


// UI
export default function Projects() {

    return (
        <div style={container}>

            {/* CARDS CONTAINER */}
            <div style={L2Container}>
                <h4 style={H4}>PROJECTS</h4>

                {/* CARD 1 : DOC-PRINT */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}

                    style={PCards}>


                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>
                    <Card
                        CardHeight="50vh"
                        CardLabelName="PERSONAL"
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={MdDeviceHub}
                        CardTitle="Doc Print"
                        CDescription="This web application enables xerox shops to print documents directly without storing them on local computers, ensuring customer privacy and preventing file misuse."
                        TSN1="Express"
                        TSN2="Supabase"
                        TSN3="Python"
                        LinkNote="LIVE&nbsp; DEMO"
                        CLink="https://doc-print.onrender.com"
                        BGCLR="#31313233"
                    />
                </motion.div>


                {/* CARD 2 : FETCHBOT T5 */}
                {/* <div style={PCards}>
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>
                    <Card
                        CardHeight="50vh"
                        CardLabelName="CLIENT"
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={IoLogoGithub}
                        CardTitle="fetchbot t5"
                        CDescription="."
                        TSN1="FastAPI"
                        TSN2="MongoDB"
                        TSN3="T5Model"
                        LinkNote="GITHUB REPO"
                        CLink="https://doc-print.onrender.com"
                        BGCLR="#31313233"
                    />
                </div> */}


                {/* CARD 3 : MINIURL */}
                {/* <div style={PCards}>
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>
                    <Card
                        CardHeight="50vh"
                        CardLabelName="PERSONAL"
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={IoLogoGithub}
                        CardTitle="miniurl api"
                        CDescription="."
                        TSN1="Express"
                        TSN2="MongoDB"
                        TSN3="Github"
                        LinkNote="GITHUB REPO"
                        CLink="https://doc-print.onrender.com"
                        BGCLR="#31313233"
                    />
                </div> */}


                {/* CARD 4 : GHIBLI LENSE */}
                {/* <div style={PCards}>
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>
                    <Card
                        CardHeight="50vh"
                        CardLabelName="CLIENT"
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={IoLogoGithub}
                        CardTitle="ghibli lense"
                        CDescription="."
                        TSN1="FastAPI"
                        TSN2="Supabase"
                        TSN3="HFModel"
                        LinkNote="GITHUB REPO"
                        CLink="https://doc-print.onrender.com"
                        BGCLR="#31313233"
                    />
                </div> */}

            </div>
        </div>
    );
}



// CSS
const container = {
    width: "100%",
    height: "fit-content",
    marginTop: "1em",
    paddingBottom: "4em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
}

const L2Container = {
    width: "92%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const H4 = {
    width: "100%",
    color: "#fff",
    fontFamily: "var(--secondary-font)",
    fontSize: "1.3em",
    padding: "0 0 1.3em 0em",
    fontWeight: "500",
}

const PCards = {
    position: "relative",
    width: "100%",
    height: "52vh",
    padding: "0.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #171616ff",
    // marginBottom: "4em"
}
