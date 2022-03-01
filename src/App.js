import react from 'react';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router, 
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
          
      </Router>
     
      
      
    </div>
  );
}

export default App;