import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/ProjectDisplay.css';
import { projectList } from './../Helper/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';



function ProjectDisplay() {

   const { id } = useParams();
   const project = projectList[id]
    
  return (
    <div className='project'>

      <h1>{project.name}</h1>
      <img src={project.image} alt="not found"/>
      <p><b>Skills</b> {project.Skills}</p>
      <div className='icon'>
        <div className='ico'><a  href={project.github} > <GitHubIcon/> </a></div>
        <div className='ico'>{project.see ? <a href={project.see} > <VisibilityIcon/> </a> : null}</div>
      
      
      </div>
      
    </div>
  )
}

export default ProjectDisplay
