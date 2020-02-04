import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './About'; 
import Experience from './Experience'; 
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <div className="navigation">
          <div className="navigation-sub">
                                          
            {/* Set up the Links */}
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/experience" className="item">Experience</Link>
            <Link to="/skills" className="item">Skills</Link>
            <Link to="/portfolio" className="item">Portfolio</Link>
            <Link to="/testimonials" className="item">Testomonials</Link>
            <Link to="/contact" className="item">Contact</Link>

            {/* Set up the Router */}
            <Route exact path="/" />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;