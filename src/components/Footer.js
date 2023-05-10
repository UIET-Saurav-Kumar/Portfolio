import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';


const Footer = () => {
    return ( <div className='footer'>

        <div className="socialMedia">
        <a href='https://github.com/UIET-Saurav-Kumar' > <GitHubIcon /> </a>
        <a href='https://www.linkedin.com/in/uiet-saurav-kumar' > <LinkedInIcon/></a>
        <a href='https://www.instagram.com/assassin_saurav/' ><InstagramIcon/></a>
        
        
        </div>

        <p> &copy; 2023</p>
        <span className='mail'>101saurav.kumar@gmail.com</span>

    </div> );
}
 
export default Footer;