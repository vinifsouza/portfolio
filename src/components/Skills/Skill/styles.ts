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
  mix-blend-mode: luminosity;

  @media (min-width: 1281px) {
    width: 35px;
    height: 35px;
    margin-left: 5px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 15px;
    height: 15px;
    margin-left: 2px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35px;
    height: 35px;
    margin-left: 2px;
  }
`;
