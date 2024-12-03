import React from 'react';
import Nav from './components/NavBar/Nav';
import Hero from './components/Home/Hero';
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
      <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Nav />
        <main className='ml-56'>
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
