import Card from "./Card";
import { MdOutlineWifiTethering } from "react-icons/md";

export default function Experience(){

    return(
        <div style={container}>
            <h2 className="heading">EXPERIENCE</h2> <br />

            <div style={cardContainer}>
                <div className="plus p-top-left">       </div>
                <div className="plus p-top-right">      </div>
                <div className="plus p-bottom-left">    </div>
                <div className="plus p-bottom-right">   </div>
                
                <Card 
                    CardLabelName="INTERNSHIP"            
                    CardLabelBGClr="#3a3a3aff"
                    CardLabelBorderClr="#3a3a3aff"
                    CardLabelTextClr="#fff"
                    CardLabelIcon={MdOutlineWifiTethering} 
                    CardTitle="SE Intern" 
                    CDescription="Determinent Studios
                    ( March - May 2025 : 3 Months ) 

                    Built an AI agent automating invoices, billing, and queries to accelerate payment workflows." 
                    TSN1="Llama" 
                    TSN2="Python" 
                    TSN3="MongoDB" 
                    LinkNote="CERTIFICATE" 
                    CLink="" 
                    BGCLR="#31313233"
                />

            </div>
        </div>
    );
}


const container = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "4em",
}

const cardContainer = {
    width: "92%",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '0.5em',
    position: "relative",
    border: "0.5px solid #171616ff",
}