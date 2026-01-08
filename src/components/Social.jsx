import { IoMdMail } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

export default function Social(){

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    // STYLE
    const circle = {
        display: "flex",
        padding: "0.6em",
        backgroundColor : "#48484933",
        backdropFilter: "blur(5px)",
        borderRadius : "50%",
        border: "0.5px solid #636364",
        cursor: "pointer",
        color: "#fff",
    } 

    return(
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            gap: "1.3em",
        }}>
            <div style={circle} onClick={() => openInNewTab('mailto:ankith7800@gmail.com')}>    <IoMdMail size={19}/>        </div>
            <div style={circle} onClick={() => openInNewTab('https://www.linkedin.com/in/ankith-kumar-ab80a7240')}>    <ImLinkedin2 size={20}/>        </div>
            <div style={circle} onClick={() => openInNewTab('https://github.com/ankith-00')}>    <SiGithub size={20}/>           </div>
            <div style={circle} onClick={() => openInNewTab('https://www.instagram.com/itz.ankith.sharma')}>    <RiInstagramFill size={20}/>    </div>
            <div style={circle} onClick={() => openInNewTab('https://x.com/ankith8970')}>    <RiTwitterXLine size={19}/>     </div>   
        </div>
    )
};