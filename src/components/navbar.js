import React , {useEffect , useState} from 'react';
import { Link , useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
   
    const [expandNavbar , setExpantNavbar] = useState(false);

    const location = useLocation(); 

    useEffect(()=>{
        setExpantNavbar(false);
    },[location] )

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
         <button onClick={() => {setExpantNavbar((prev) => !prev)}}>
              <ReorderIcon/>
             </button>
        </div>
        <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/instagram"> Instagram </Link>

        </div>
      
    </div>
  )
}
 
export default Navbar
