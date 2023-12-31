import React from 'react'
import "./index.css"
import Navbar from './Navbar';
import Home from './Home';
import SocialLinks from './SocialLinks';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
       <Portfolio/>
       <Experience/>
       <Contact/>

      <SocialLinks/>
    </div>
  )
}

export default App