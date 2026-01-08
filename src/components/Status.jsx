import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function Status() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: -20 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }}    
    
      transition={{ 
        delay: 4.7, 
        duration: 0.8,
        type: "spring", 
        bounce: 0.4 
      }}
      
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      
      style={{
        display: "flex",
        color: "#2eca39ff",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5em",
        backgroundColor: "#48484933",
        boxShadow: "0 4px 30px #0000001a",
        backdropFilter: "blur(5px)",
        border: "0.5px solid #2eca39ff",
        borderRadius: "1.2em",
        padding: "0.2em 2em 0.3em 1em",
        fontFamily: "var(--secondary-font)",
        fontSize: "0.8em",
        fontWeight: "400",
        letterSpacing: "0.7px",
        width: "fit-content",
        cursor: "pointer",
      }}
    >
      <Lottie
        path="status.json"
        loop={true}
        autoplay={true}
        style={{ width: "2em", height: "2em" }}
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.3 }}
        style={{ margin: 0, fontSize: "3cqw"}}
      >
        AVAILABLE&nbsp; FOR &nbsp;OPPORTUNITES
      </motion.p>
    </motion.div>
  );
}