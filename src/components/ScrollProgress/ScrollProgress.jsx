import React from 'react'
import './ScrollProgress.css'
import { useState, useEffect } from 'react'
import {BsArrowUp} from 'react-icons/bs'

const ScrollProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(()=>{
        const updateScrollCompletion =() =>{
            const currentProgress = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            // console.log(currentProgress ,  scrollHeight)
            if(scrollHeight){
                setCompletion(Number(currentProgress/scrollHeight).toFixed(2)*100)
            }
        }
        
        window.addEventListener('scroll', updateScrollCompletion)

        return()=>{
            window.removeEventListener('scroll', updateScrollCompletion)

        }

    },[])


  return (
    <div className={completion ? 'onView progress' : 'onHide'} style={{background: `conic-gradient( #f1909a ${completion}%, transparent ${completion}%)`}}>
    <span className={completion ? 'onView ProgressValue' : 'onHide'} onClick={()=>{document.documentElement.scrollTop=0}}><BsArrowUp className='arrow'/></span>

    
    </div>
  )
}

export default ScrollProgress