import React from 'react'
import './Skills.css'
import DownArrow from '../DownArrow/DownArrow'
import {skillsData} from '../../data/skillsData'


const Skills = () => {

  return (
    <section id='skills'>
    <div className="section flex_l" data-aos="zoom-in">
        <div className="skills_l">
        {skillsData.map((item)=>{
            return (
                <div className='icons_div'>{item.icon}</div>
            )
        })}

        </div>
        <div className="skills_r">
            <h2>I'm Skilled in</h2>
            <p>Conceptualizing, designing, and coding technical solutions using JavaScript technology stacks. I'm delivering enterprise solutions in domains like Mobility and Scientific Core Analytics.</p>
            <DownArrow nextSection='#projects' />
        </div>
    </div>
    </section>
  )
}

export default Skills