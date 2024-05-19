import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import { ThemeProvider } from './components/context/ThemeProvider';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function App() {

  // const [theme, setTheme] = useState('dark');

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  // }

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
