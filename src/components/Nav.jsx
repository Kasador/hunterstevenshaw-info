import React from 'react';
import { motion } from "motion/react"
import { Link } from "react-scroll";
import { FaTree, FaAddressCard, FaFolderOpen, FaIdCardAlt } from "react-icons/fa";

<motion.div animate={{ x: [0, 100, 0] }} />

const Nav = () => {
    return (
        <div className="w-40 h-full bg-primary fixed border-r-4 border-text">
            <ul className="NavItems flex flex-col justify-items-center items-center ">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000}>
                        <div className="NavLinks flex flex-col items-center p-5 text-3xl text-background">
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
                        <div className="NavLinks flex flex-col items-center p-5 text-3xl text-background">
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
                        <div className="NavLinks flex flex-col items-center p-5 text-3xl text-background">
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
                        <div className="NavLinks flex flex-col items-center p-5 text-3xl text-background">
                            <FaIdCardAlt />
                            Contact
                        </div>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;