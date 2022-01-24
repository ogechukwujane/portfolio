import react from 'react';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router, 
  // Switch , 
  Routes, 
  Route
} from 
"react-router-dom";

import Home from './components/Home';
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
       
          <Navbar/>
          <Home/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Footer/>

          
          {/* <Routes>
            <Route exact path="/" element={<Home />}/>
           
            <Route path="/about" element= {<About />}/>
              
            <Route path="/resume" element={<Resume />}/>
             
            <Route path="/portfolio" element={<Portfolio />}/>
              
            <Route path="/contact" element={<Contact />}/>
              
          </Routes> */}
          
      </Router>
     
      
      
    </div>
  );
}

export default App;