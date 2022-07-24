import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; // 1rem = 1px;
  }

  body, html {
    height: 100%;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    caret-color: transparent;
  }


  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  p, nav {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    p, nav {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 425px) {
    p, nav {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 320px) {
    p, nav {
      font-size: 1.2rem;
    }
  }
`;
