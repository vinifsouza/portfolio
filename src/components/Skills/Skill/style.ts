import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .levels {
    display: flex;
    flex-direction: row;
  }

  i {
    font-style: normal;
    &:before {
      content: '=> ';
    }
  }

  // Device = Desktops
  // Screen = 1281px to higher resolution desktops
  @media (min-width: 1280px) {
    i {
      margin-right: 1rem;
      font-size: 1rem;
    }

    margin: 1rem 0 1rem 0;
  }

  // Device = Laptops, Desktops
  // Screen = B/w 1025px to 1280px */
  @media (min-width: 1025px) and (max-width: 1280px) {
    i {
      font-size: 1rem;
      margin-right: 0.8rem;
    }

    margin: 0.6rem 0 0.6rem 0;
  }

  // Device = Tablets, Ipads (portrait)
  // Screen = B/w 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) {
    i {
      font-size: 0.6rem;
      margin-right: 0.7rem;
    }

    margin: 0.6rem 0 0.6rem 0;
  }
`;

export const SkillHideWrapper = styled.div`
  mix-blend-mode: luminosity;

  // Device = Desktops
  // Screen = 1281px to higher resolution desktops
  @media (min-width: 1281px) {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }

  // Device = Laptops, Desktops
  // Screen = B/w 1025px to 1280px */
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 15px;
    height: 15px;
    margin-left: 2px;
  }

  // Device = Tablets, Ipads (portrait)
  // Screen = B/w 768px to 1024px
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35px;
    height: 35px;
    margin-left: 2px;
  }
`;
