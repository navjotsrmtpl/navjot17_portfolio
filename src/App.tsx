import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
