import React, { useEffect , useState } from 'react'
import './Projects.css'
import {projectsData} from '../../data/projectsData'
const Projects = () => {

  const [width, setWidth] = useState (window.innerWidth>940?"90vh" : "auto")

  useEffect(()=>{
    window.addEventListener('resize', function(){
      console.log(width)
      if (window.innerWidth>940){
        setWidth('90vh')
      }else{
        setWidth('auto')
      }
    }, true);
  },[width])

  return (
    <section id='projects'>
    <div>
      <div className='project_heading'> 
        <h2>Here are some of my recent projects</h2>
        </div>
        {projectsData.map((item, index)=>{
            return(
              <div id={item.id}>

            <div data-aos={index%2!==0?"zoom-in-right":"zoom-in-left"} style={{height:`${width}`}}className={item.type==='left'?"section flex_l":" section flex_r"}>
                 <div className="projects_l">
                    <a href={item.link} target='_blank' rel="noreferrer">
                    <img src={item.img} alt="" />
                    </a>
                </div>
                <div className="projects_r">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className='viewDemo'>
                    <a href={item.link} target='_blank' rel="noreferrer" >View Demo</a>

                    </div>
                </div>

            </div>
            </div>
            )
        })}
    </div>
    </section>
   

  )
}

export default Projects
