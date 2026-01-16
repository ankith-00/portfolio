import Social from "./Social";


export default function Connect() {

    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            justifyContent: "space-between",
            padding: "1em",
            color: "#fff",
            alignItems: "center",
        }}>
            <div style={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                textAlign: "center",
                fontFamily: "var(--primary-font)",
            }}>
                <h2>Let's Connect</h2>
                <p style={{ lineHeight: "1.5em", fontSize: "4cqw" }}>Partner with me to evolve your raw ideas into a powerful, revenue-generating product</p>

            </div>

            <Social />

            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.7em",
                textAlign: "center",
                fontFamily: "var(--primary-font)",
                paddingBottom: "1em",

            }}>
                <hr color="#fff" />

                <p style={{
                    fontFamily: "var(--code-font)",
                    fontSize: "3cqw",
                    color: "#7e7d7d",
                }}>// COPYRIGHT - {new Date().getFullYear()} BY ANKITH.DEV</p>

            </div>

        </div>

    );
}


const container = {


}

const containerContent = {

}