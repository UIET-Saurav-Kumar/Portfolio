import React from 'react';
import ProjectItem from '../components/ProjItem';
import '../styles/project.css';
import { projectList } from './../Helper/ProjectList';


function Project() {
  return (
    <div className='projects'>
      <h1>My Project</h1>
      <div className='projectList'>

        {projectList.map((project , idx)=>
           <ProjectItem id={idx} name={project.name} image={project.image} key={idx}/>
        )}
        
        


      </div>
    </div>
  )
}

export default Project
