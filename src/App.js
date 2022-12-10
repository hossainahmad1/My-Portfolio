import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import SocialLink from './Components/SocialLink/SocialLink';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Project></Project>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <SocialLink></SocialLink>
    </div>
  );
}

export default App;
