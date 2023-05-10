import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import '../styles/home.css';

function Home() {

  return (
    <div className='home' >
      <div className='about'>
         <h2>Hi, My name is saurav</h2>
         <div className='prompt'>
          <p>A software developer with a passion for learning and creating</p>
          <a href='https://github.com/UIET-Saurav-Kumar' > <GitHubIcon /> </a>
          <a href='https://www.linkedin.com/in/uiet-saurav-kumar' > <LinkedInIcon/></a>
          {/* <a href='101saurav.kumar@gmail.com' >  <EmailIcon/> </a> */}
          
        
       
         </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>

        <li className='item'>
            <h2>Languages</h2>
            <span>  C, C++, JavaScript, SQL, HTML,CSS ,Php</span>
          </li>

          <li className='item'>
            <h2>Front-End</h2>
            <span> HTML, CSS, JavaScript, ReactJs, BootStrap, Firebase, API</span>
          </li>
          <li className='item'>
            <h2>Coursework</h2>
            <span> Data Structures, Object Oriented Programming,Database Management System</span>
          </li>
          <li className='item'>
            <h2>Soft Skill</h2>
            <span> Time Management, Teamwork, Communication, Problem Solving</span>
          </li>
          
        </ol>
      </div>
    </div>
  )
}

export default Home
