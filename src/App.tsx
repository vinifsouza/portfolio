import AboutMe from './components/AboutMe';
import Contact from './components/Contact/index';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './components/Home';
import React from 'react';
import Skills from './components/Skills/index';

export default function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
      <GlobalStyles />
    </>
  );
}
