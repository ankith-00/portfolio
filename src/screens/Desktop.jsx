import { Link } from "react-router-dom";
import Social from "../components/Social";

import '../App.css'

export default function Desktop() {
    return (
        <div className="desktop-conatiner">
            <div className="center-content">
                
                {/* QR - BOX */}
                <div className="qr-box">
                    {/* PLUS - SIGNS */}
                    <div className="plus p-top-left">       </div>
                    <div className="plus p-top-right">      </div>
                    <div className="plus p-bottom-left">    </div>
                    <div className="plus p-bottom-right">   </div>

                    {/* QR IIMAGE */}
                    <img 
                        src="qr-code.svg" 
                        alt="QR IMAGE" 
                        className="qr-image" 
                    />
                    
                </div>

                <h1 className="unlock-text">unlock on mobile</h1>

                {/* SOCIAL MEDIA LINKS */}
                <br /><br />
                <Social/>
            </div>
        </div>
    )
}