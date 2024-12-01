import React from 'react';
import { motion } from "motion/react"
import { Link } from "react-scroll";
import { FaTree, FaAddressCard, FaFolderOpen, FaIdCardAlt } from "react-icons/fa";

<motion.div animate={{ x: [0, 100, 0] }} />

const Nav = () => {
    return (
        <div className="w-10">
            <ul className="NavItems">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration= {1000}>
                        <div className="NavLinks">
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
                        <div className="NavLinks">
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
                        <div className="NavLinks">
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
                        <div className="NavLinks">
                            <FaIdCardAlt />
                            Contact
                        </div>
                </Link>
            </ul>
            <p className=''> asdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kaj sdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl ;akfjdsasd fjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;las fjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdf jl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;la sf jdl;akfjdsa sdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfd j;lasdfj;alsfkjd;las fjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;a lsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsd fl;akdjfsl;akfjds;lakfdj;lasd fj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;l asdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsf kjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;la kfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjd sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;ak fjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjf sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjds</p>
            <p className=''> asdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kaj sdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl ;akfjdsasd fjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;las fjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdf jl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;la sf jdl;akfjdsa sdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfd j;lasdfj;alsfkjd;las fjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;a lsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsd fl;akdjfsl;akfjds;lakfdj;lasd fj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;l asdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsf kjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;la kfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjd sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;ak fjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjf sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjds</p>
            <p className=''> asdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kaj sdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl ;akfjdsasd fjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;las fjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdf jl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;la sf jdl;akfjdsa sdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfd j;lasdfj;alsfkjd;las fjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;a lsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsd fl;akdjfsl;akfjds;lakfdj;lasd fj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;l asdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsf kjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;la kfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjd sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;ak fjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjf sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjds</p>
            <p className=''> asdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kaj sdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl ;akfjdsasd fjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkj d;lasfjd;las fjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdf jl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;la sf jdl;akfjdsa sdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfd j;lasdfj;alsfkjd;las fjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;a lsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsd fl;akdjfsl;akfjds;lakfdj;lasd fj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;l asdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsf kjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;la kfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjd sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;ak fjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjf sasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjdsasdfjl;kajsdfl;akdjfsl;akfjds;lakfdj;lasdfj;alsfkjd;lasfjd;lasfjdl;akfjds</p>
        </div>
    )
}

export default Nav;