import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';

export const ScrambleText = ({ 
  text, 
  speed = 1 / 3, 
  delay = 30, 
  waitTime = 5800 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += speed;
    }, delay);
  }, [text, speed, delay]);

  useEffect(() => {
    const timeout = setTimeout(scramble, waitTime);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scramble, waitTime]);

  return (
    <motion.h2
      onMouseEnter={scramble}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: waitTime / 1000, duration: 0.5 }}
      style={{ 
        fontFamily: 'var(--secondary-font)', 
        fontWeight: "600",
        textAlign: "center",
        color: "#fff",
        fontSize: "1.7em",
      }}
    >
      {displayText}
    </motion.h2>
  );
};