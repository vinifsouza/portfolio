import AboutMe from './components/AboutMe';
import Contact from './components/Contact/index';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './components/Home';
import Menu from './components/Menu';
import React from 'react';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
      <Menu />
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
      <GlobalStyles />
    </>
  );
}
