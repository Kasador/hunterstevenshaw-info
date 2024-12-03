import React from 'react';
import Me from '/images/me.jpg';
import Typewriter from 'typewriter-effect';
// import Socials from '../Socials/Socials';
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";


const Hero = () => {
    return (
        <div className="flex flex-col text-center items-center justify-center h-screen" name='home'>
            <div className="IntroWrapper flex flex-col items-center">
                <motion.img 
                    src={Me}
                    alt="Me"
                    className="rounded-full flex mb-5 border-8 border-text me"
                    initial={{ opacity: 1, y: -800 }} // Start 100px above its final position
                    animate={{ opacity: 1, y: 0 }} // Slide down to its original position
                    transition={{
                        type: "spring", // Add spring for bounce effect
                        stiffness: 200, // Adjust bounce intensity (higher = less bounce)
                        damping: 20, // Controls how quickly the bounce stops
                        duration: 4, // Adjust for longer/slower animations
                        delay: 3.5
                    }}
                />
                <div className="text-6xl mt-5">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(40)
                                .typeString('Hello there...')
                                .pauseFor(200)
                                .deleteAll()
                                .typeString("My name is Hunter.")
                                .pauseFor(10000)
                                .deleteAll()
                                .typeString("uh... Still here?")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("What we doing?...")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Learn about me.")
                                .pauseFor(5000)
                                .deleteAll()
                                .typeString("My name is Hunter.")
                                .start();
                        }}
                    />
                </div>
                {/* <Socials /> */}
            </div>
            <div className="CallToActionWrapper">
                <Link 
                    className="NavLinksIntro"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000} >
                        <div className="CallToAction">
                            <span>Learn More</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                </Link>
            </div>
        </div>
    );
}

export default Hero;