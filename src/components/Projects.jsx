
import { MdDeviceHub } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import Card from "./Card";



export default function Projects(){

    return(
        <div style={container}>
            
            {/* CARDS CONTAINER */}
            <div style={L2Container}>
                <h4 style={H4}>PROJECTS</h4>

                {/* CARD 1 */}
                <div style={PCards}>
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    
                    <Card
                        CardLabelName="CLIENT PROJECT"            
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={MdDeviceHub} 
                        CardTitle="Study-Trackr" 
                        CDescription="An attendance app using GPS to securely verify student and faculty locations for real-time check-ins." 
                        TSN1="Vite + React" 
                        TSN2="Sheet" 
                        TSN3="GAS" 
                        LinkNote="LIVE&nbsp; DEMO" 
                        CLink="https://study-trackr-voi.vercel.app" 
                        BGCLR="#31313233"
                    
                    />

                </div>


                {/* CARD 2 */}
                {/* <div style={SecondPCards} >
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
    
                </div> */}


                {/* CARD 3 */}
                <div style={PCards}>
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>

                    <Card
                        CardLabelName="PERSONAL"            
                        CardLabelBGClr="#3a3a3aff"
                        CardLabelBorderClr="#3a3a3aff"
                        CardLabelTextClr="#fff"
                        CardLabelIcon={MdDeviceHub} 
                        CardTitle="Doc Print" 
                        CDescription="It is a webapp that lets xerox shops print documents without saving them on local computer. This keeps customer files private and helps stop misuse.." 
                        TSN1="Express" 
                        TSN2="Supabase" 
                        TSN3="Python" 
                        LinkNote="LIVE&nbsp; DEMO" 
                        CLink="https://doc-print.onrender.com" 
                        BGCLR="#31313233"
                    
                    />

                </div>

            </div>
        </div>
    );
}


// CSS
const container = {
    width: "100%",
    height: "fit-content",
    marginTop :"1em",
    paddingBottom: "4em",
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-around",
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
    height: "50vh",
    padding: "0.5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0.5px solid #171616ff",
}

const SecondPCards = {
    ...PCards,
    borderTop: "none",
    BorderBottom: "none",
}
