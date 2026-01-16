
export default function Navbar() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <div style={NavContainer}>
            <nav style={NavBar}>
                <div>
                    <h2 style={LogoText}>ANKITH</h2>
                </div>

                <div>
                    <button
                        style={ConnectBtn}
                        onClick={() => openInNewTab('mailto:ankith7800@gmail.com')}
                    >connect</button>
                </div>
            </nav>
        </div>
    );
}


const NavContainer = {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.95em 0.2em 0 0.2em",
    position: "fixed",
    top: "0em",
    zIndex: "5",
}

const NavBar = {
    width: "97%",
    padding: "0.5em 0.7em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    background: "#53535336",
    boxShadow: "0 4px 30px #0000001a",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    borderTop: "1px solid #3e3d3d54",
    borderRadius: "1.4em"
}

const LogoText = {
    fontSize: "0.95em",
    fontFamily: "var(--code-font)",
    fontWeight: "800",
    letterSpacing: "1px",
    paddingLeft: "0.2em"
}

const ConnectBtn = {
    fontSize: "1em",
    fontFamily: "var(--code-font)",
    padding: "0.7em 1.8em",
    border: "none",
    borderRadius: "0.8em",
    background: "#7a787836",
    color: "#fff",
    boxShadow: "0 6px 30px #1818181a",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
};