import React from 'react';
import Nav from './components/Nav';
import { motion, useScroll, useSpring } from "framer-motion";
import './index.css'

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div>
        <Nav />
      </div>
    </>
  )
}

export default App
