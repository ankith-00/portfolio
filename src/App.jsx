import { useState, useEffect } from "react";
import { motion, AnimatePresence, steps } from "framer-motion";

import Mobile  from './components/Mobile'
import Desktop  from './components/Desktop'

import "./App.css"

// GREETING - TEXT ARRAY
const words = [ "HELLO", "नमस्ते", "ನಮಸ್ಕಾರ", "నమస్కారం", "வணக்கம்", "നമസ്കാരം", "HOLA", "Привет", "BONJOUR" ];


// APP COMPONENT
export default function App(){

  const [isPhone, setPhone] = useState(window.innerWidth <= 480);
  const [overlay, setOverlay] = useState(true);
  const [index, setIndex] = useState(0);

  // DEVICE WIDTH USE-EFFECT
  useEffect(()=>{
    const handleResize = ()=>{
      setPhone(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);


  // GREETING OVERFLAY
  useEffect(() => {
    const timer = setTimeout(() =>{
      setOverlay(false);
    }, 4500); 
    return () => clearTimeout(timer);
  }, []);


  // GREETING TEXT
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);


  // UI
  return (
    <> 
      {/* GREETING - OVERLAY */}
      <AnimatePresence>
        {
          overlay && (
            <motion.div 
              className="overlay-container"
              key="main-overlay"
              initial={{ 
                opacity: 1 
              }}
              exit={{ 
                opacity: 0, 
                transition: { 
                  duration: 0.8, 
                  ease: "easeInOut" 
                } 
              }}
            >
              
              {/* GREETING - TEXT */}
              <AnimatePresence mode="popLayout">
                <motion.h1
                  key={words[index]}
                  initial={{ 
                    opacity: 0, y: 20 
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1
                  }}
                  className="overlay-text"
                >
                  {words[index]}
                </motion.h1>
              </AnimatePresence>
            </motion.div>
          )
        }
      </AnimatePresence>


      {/* MAIN CONTENT */}
      {isPhone ? ( <Mobile/> ) : ( <Desktop/> )}

    </>
  )
}