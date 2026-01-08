import { FiExternalLink } from "react-icons/fi";

export default function Card(
    {   
        CardHeight="48vh",
        CardLabelName, 
        CardLabelBGClr="#3a3a3aff", 
        CardLabelBorderClr="#3a3a3aff", 
        CardLabelTextClr="#fff", 
        CardLabelIcon, 
        CardTitle, 
        CDescription, 
        TSN1, 
        TSN2, 
        TSN3, 
        LinkNote="LIVE DEMO", 
        CLink, BGCLR="#31313233"
    }){
    
        const openInNewTab = (URL) => {
            window.open(URL, '_blank', 'noreferrer');
        };

        const Card = {
            width   : "100%",
            height  : CardHeight,
            display : "flex",
            flexDirection   : "column",
            justifyContent  : "space-between",

            padding : "1.2em",
            borderRadius    : "0.4em",
            background      : BGCLR,
            boxShadow       : "0 4px 30px #0000001a",
            backdropFilter  : "blur(10.2px)",
            WebkitBackdropFilter: "blur(10.2px)",
        }

        const NormalLabel = {
            width: "fit-content",
            fontFamily: "var(--code-font)",
            color: "#fff",
            background: "#3a3a3aff",
            padding: "0.6em 1.1em",
            textAlign: "center",
            fontSize: "0.75em",
            letterSpacing: "1px",
            borderRadius: "0.5em",
            fontWeight: "500",
        }

        const CardLabel = {
            ...NormalLabel,
            background: CardLabelBGClr,
            color: CardLabelTextClr,
            borderColor: CardLabelBorderClr,

        }

        // UI
        return(
            <div style={Card}>
                {/* CR1 */}
                <div style={CR1}>
                    <div style={CardLabel}>{CardLabelName}</div>
                    <div style={CR3CButton}>{CardLabelIcon && <CardLabelIcon size={18} />}</div>
                </div>


                {/* CR2 */}
                <div style={CR2}>
                    <h1 style={CR2H1}>{CardTitle}</h1>
                    <p style={{whiteSpace: "pre-line", lineHeight: "1.4em", fontSize: "0.98em"}}>{CDescription}</p>
                </div>


                {/* CR3 */}
                <div style={CR3}>
                    <div style={TECHRow}>
                        <div style={NormalLabel}>{TSN1}</div>
                        <div style={NormalLabel}>{TSN2}</div>
                        <div style={NormalLabel}>{TSN3}</div> 
                        <p>&nbsp;+ &nbsp;1</p>
                    </div>

                    <div style={CR3R2}>
                        <h4 style={CR3H4}>{LinkNote}</h4>
                        <div style={CR3CButton} onClick={() => openInNewTab(`${CLink}`)}><FiExternalLink size={18}/></div>
                    </div>
                    
                </div>
            </div>
        );
}



// STYLE
const CR1 = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
}

const CR2 = {
    fontFamily: "var(--primary-font)",
    color: "#fff",
}

const CR2H1 = {
    fontFamily: "var(--secondary-font)",
    color: "#fff",
    fontWeight: "600",
}

const TECHRow = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

const CR3 = {
    width   : "100%",
    display : "flex",
    flexDirection   : "column",
    gap : "1.5em",
    color   : "#fff",
}

const CR3H4 = {
    fontFamily: "var(--poppins)",
    letterSpacing: "2px",
    fontWeight: "500",

}

const CR3R2 = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const CR3CButton = {
    display: "flex",
    padding: "0.6em",
    backgroundColor : "#48484933",
    backdropFilter: "blur(5px)",
    borderRadius : "50%",
    border: "0.5px solid #636364",
    cursor: "none",
    color: "#fff",
} 