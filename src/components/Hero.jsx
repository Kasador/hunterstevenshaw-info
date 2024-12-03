import React from 'react';
import Me from '../../public/images/me.jpg';
import Typewriter from 'typewriter-effect';
// import Socials from '../Socials/Socials';
import { Link } from "react-scroll";


const Hero = () => {
    return (
        <div className="Intro" name='home'>
            <div className="IntroWrapper">
                <img src={Me} alt="Me" className="Me" />
                <div className="TypeEffect">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hello there...')
                            .pauseFor(500)
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
                            <span>See What I Do</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                </Link>
            </div>
        </div>
    );
}

export default Hero;