import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Spincuber from './Spincuber';


const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know me &</h5>
            <h2>My Skillset</h2>
            <div className={"container about__container"}>
                <div className='about__me'>
                   <Spincuber></Spincuber>
                </div>
            
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h5>Clients</h5>
                            <small>100+ Clients</small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Projects</h5>
                            <small>40+ Projects</small>
                        </article>
                    </div>
                    <p>Got something wrong with your web or want to digitize your business? Worry not ....You are at the right place.A professional developer is looking your way with experience and expertees in both maintaining awesome UIs with collaboration of smart SEO and at the same time handling server side(backend) logic.Want an interaction....? Jump down to interaction section. I have handled clients from all around the globe and can debug your problems too with the least of your mind-drawn picture of  problem. On the same side, I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.     </p>
                    <a href={"contact"} className={"btn btn-primary mediabtn"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About