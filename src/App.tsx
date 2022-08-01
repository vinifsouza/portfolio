import React from 'react';

import AboutMe from 'components/AboutMe';
import Contact from 'components/Contact';
import Home from 'components/Home';
import Menu from 'components/Menu';
import Skills from 'components/Skills';
import GlobalStyles from 'styles/GlobalStyles';

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
