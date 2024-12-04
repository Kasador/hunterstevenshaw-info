import { React, useState} from 'react';
import { motion } from "motion/react" // for transitions >>> animations 
import { Link } from "react-scroll";
import en from '/images/usa.png';
import es from '/images/spain.png';
import { FaTree, FaAddressCard, FaFolderOpen, FaIdCardAlt } from "react-icons/fa";

const Nav = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <motion.div
            className={`w-56 h-full bg-primary fixed border-r-4 border-text ${animationComplete ? 'opacity-0' : 'opacity-0'}`}
                initial={{ opacity: 0, x: -600 }} // Start 100px above its final position
                animate={{ opacity: 1, x: 0 }} // Slide down to its original position
                transition={{
                    type: "spring", // Add spring for bounce effect
                    stiffness: 200, // Adjust bounce intensity (higher = less bounce)
                    damping: 18, // Controls how quickly the bounce stops
                    duration: 4, // Adjust for longer/slower animations
                    delay: 3.5
                }}

                onAnimationComplete={() => setAnimationComplete(true)}
            >
            <ul className="NavItems flex flex-col justify-items-center items-center ">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000}>
                        <div className="NavLinks
                        flex flex-col items-center 
                        p-5 text-3xl 
                        text-background 
                        hover:text-text hover:bg-secondary">
                            <FaTree />
                            Home
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000} >
                        <div className="NavLinks
                        flex flex-col items-center 
                        p-5 text-3xl 
                        text-background 
                        hover:text-text hover:bg-secondary">
                            <FaAddressCard />
                            About
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {500} >
                        <div className="NavLinks
                        flex flex-col items-center 
                        p-5 text-3xl 
                        text-background 
                        hover:text-text hover:bg-secondary">
                            <FaFolderOpen />
                            Projects
                        </div>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {500} >
                        <div className="NavLinks
                        flex flex-col items-center 
                        p-5 text-3xl 
                        text-background 
                        hover:text-text hover:bg-secondary">
                            <FaIdCardAlt />
                            Contact
                        </div>
                </Link>
                <li className='flex absolute bottom-6'>
                    <motion.img 
                        className='w-20 pr-2 language'
                        src={en}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        alt="English" />
                    <motion.img 
                        className='w-20 pl-2 language'
                        src={es}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        alt="Spanish" />
                </li>
            </ul>
        </motion.div>
    )
}

export default Nav;