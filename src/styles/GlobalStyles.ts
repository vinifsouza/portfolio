import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
    caret-color: transparent;
  }


  // Device = Desktops
  // Screen = 1281px to higher resolution desktops
  @media (min-width: 1280px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }

    p, nav {
      font-size: 1rem;
    }
  }

  // Device = Laptops, Desktops
  // Screen = B/w 1025px to 1280px */
  @media (min-width: 1025px) and (max-width: 1279px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p, nav {
      font-size: 0.9rem;
    }
  }

  // Device = Tablets, Ipads (portrait)
  // Screen = B/w 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    p, nav {
      font-size: 0.9rem;
    }
  }

  // Device = Tablets, Ipads (landscape)
  // Screen = B/w 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

    /* CSS */

  }

  // Device = Low Resolution Tablets, Mobiles (Landscape)
  // Screen = B/w 481px to 767px
  @media (min-width: 481px) and (max-width: 767px) {

    /* CSS */

  }

  // Device = Most of the Smartphones Mobiles (Portrait)
  // Screen = B/w 320px to 479px
  @media (min-width: 320px) and (max-width: 480px) {

    /* CSS */

  }
`;
