
export default function SkillBadge({BadgeName, IconName: Icon}){
    return(
        <div style={{
            display: "flex",
            gap: "0.4em",
            background: "#71717333",
            padding: "1em 1.5em",
            color: "#b3b3b5ff",
            boxShadow: "0 4px 30px #0000001a",
            backdropFilter: "blur(10.2px)",
            WebkitBackdropFilter: "blur(10.2px)",
            border: "0.5px solid #ffffff54",
            borderRadius: "2em",
        }}>
            {Icon && <Icon size={20} />}
            <p style={{
                fontFamily: "var(--code-font)",
                fontWeight: "200",

            }}>{BadgeName}</p>
        </div>
    )
}
