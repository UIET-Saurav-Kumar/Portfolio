import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/ProjectDisplay.css';
import { projectList } from './../Helper/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';



function ProjectDisplay() {

   const { id } = useParams();
   const project = projectList[id]
    
  return (
    <div className='project'>

      <h1>{project.name}</h1>
      <img src={project.image} alt="not found"/>
      <p><b>Skills</b> {project.Skills}</p>
      <a href={project.github} > <GitHubIcon/> </a>
      
    </div>
  )
}

export default ProjectDisplay
