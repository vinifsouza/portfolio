import styled from 'styled-components';
import { Asset, Container, Content } from 'styles/DefaultStyles';

export const SkillsContainer = styled(Container)`
  .back-end {
    margin-top: 5rem;
  }

  @media (min-width: 426px) {
    .section-title {
      visibility: hidden;
      display: none;
      width: 0;
      aside {
        width: 50%;
      }
    }
  }

  @media (max-width: 425px) {
    .section-title-m {
      visibility: hidden;
    }

    aside {
      height: 60%;
    }
  }
`;

export const SkillsContent = styled(Content)`
  width: 50% !important;

  @media (max-width: 425px) {
    align-content: flex-start !important;
  }
`;

export const SkillAsset = styled(Asset)`
  @media (max-width: 425px) {
    margin-bottom: 0;
    height: 40% !important;

    h1 {
      height: 0;
    }

    align-content: flex-start !important;
  }
`;

export const HeaderMobile = styled.div`
  @media (min-width: 425px) {
    height: 0;
    visibility: hidden;
  }

  @media (max-width: 425px) {
    display: flex;
    width: 100%;
    height: 5rem;
    margin-top: 3rem;
    justify-content: center;
  }
`;

export const SkillLevels = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  font-size: 1.2rem;

  @media (max-width: 425px) {
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    margin-top: 3rem;
  }
`;

export const SkillsLevelsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }

  padding-left: 1rem;
`;
