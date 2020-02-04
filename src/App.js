import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/About'; 
import Experience from './components/Experience'; 
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; 
import './styles/App.css';
 
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
            <Link to="/testimonials" className="item">Testimonials</Link>
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