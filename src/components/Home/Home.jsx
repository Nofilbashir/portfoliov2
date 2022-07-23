import React from 'react'
import './Home.css'
import DownArrow from '../DownArrow/DownArrow'
import me from '../../assets/me.jpg'

const Home = () => {

  const transition ={type:'spring', duration: 3}
  return (
    <section id='home'>
    
    <div className="section flex_r" data-aos="zoom-in-right">
      <div className="home_r">
            <img src={me} alt="" />
      </div>
        <div className="home_l"
        transition={{...transition, type:'tween'}}
        >
            <h2>Hi there</h2>
            <h3>I'm Nofil</h3>
            <p>Web Developer & Data Analyst. I love to deliver clean code solutions for interactive web applications.</p>
            <DownArrow nextSection='#skills' />
        </div>


    </div>
    </section>
  )
}

export default Home