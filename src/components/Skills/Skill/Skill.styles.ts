import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .levels {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  i {
    font-style: normal;
    &:before {
      content: '=> ';
    }
  }

  @media (min-width: 1280px) {
    i {
      margin-right: 1rem;
    }
    margin: 1rem 0 1rem 0;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0.6rem 0 0.6rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0.6rem 0 0.6rem 0;
  }
`;

export const SkillHideWrapper = styled.div`
  background-color: #090e12;

  display: flex;
  justify-content: center;
  align-content: center;

  img {
    mix-blend-mode: luminosity;
    margin-left: 0.5rem;
  }

  @media (min-width: 1281px) {
    width: 35px;
    height: 35px;
    margin-left: 1rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 35px;
    height: 35px;
    margin-left: 2px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35px;
    height: 35px;
    margin-left: 2px;
    img {
      margin-left: 0.5rem;
    }
  }
`;
