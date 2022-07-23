import React from 'react'
import './Connect.css'
import {RiLinkedinLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {IoLogoInstagram} from 'react-icons/io'
import {RiWhatsappLine} from 'react-icons/ri'
import me from '../../assets/me.jpg'
const Skills = () => {
  return (
    <section id='connect'>
    <div className="section flex_r"  data-aos="zoom-in">
        <div className="connect_l">
            <img src={me} alt="" />
        </div>
        <div className="skills_r">
            <h2>Let's Connect</h2>
            <p>I would love to hear from you. You can reach me at platefroms given below.</p>
            <div className='socials'>
            <div>
                <a href="https://www.linkedin.com/in/muhammad-nofil-265171188" target='_blank' rel="noreferrer" className="downArrow" ><RiLinkedinLine /></a>
            </div>
            <div>
                <a href="https://github.com/Nofilbashir" target='_blank' rel="noreferrer" className="downArrow"><RiGithubLine /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/nofilbashir/" target='_blank' rel="noreferrer" className="downArrow"><IoLogoInstagram /></a>
            </div>
            <div>
                <a href="https://wa.me/923054106689" target="_blank" rel="noreferrer" className="downArrow"><RiWhatsappLine /></a>
            </div>

            </div>
        </div>

    </div>
    </section>
  )
}

export default Skills