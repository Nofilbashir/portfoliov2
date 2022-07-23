import React from 'react'
import './DownArrow.css'
import {BsArrowDown} from 'react-icons/bs'

const DownArrow = (props) => {
    const {nextSection} = props

  return (
    
    <div>
     <a href={nextSection} className="downArrow" ><BsArrowDown /></a>
    </div>

  )
}

export default DownArrow