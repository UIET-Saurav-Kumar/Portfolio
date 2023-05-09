import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/footer.css';


const Footer = () => {
    return ( <div className='footer'>

        <div className="socialMedia">
        <GitHubIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
        <EmailIcon/>
        </div>

        <p> &copy; 2023</p>

    </div> );
}
 
export default Footer;