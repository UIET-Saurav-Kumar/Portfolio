import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import Experiences from './pages/experiences';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import InstagramPage from './pages/instagram';
import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/projects"  element={<Project/>} />
      <Route path="/projects/:id"  element={<ProjectDisplay/>} />
      <Route path="/experience"  element={<Experiences/>} />
      <Route path="/instagram"  element={<InstagramPage/>} />
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
