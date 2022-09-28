import styled from 'styled-components';
import { Asset, Container } from 'styles/DefaultStyles';

export const SkillsContainer = styled(Container)`
  @media (max-width: 425px) {
    .section-title-m {
      height: 0;
      visibility: hidden;
    }
  }
`;

export const SkillAsset = styled(Asset)`
  @media (max-width: 425px) {
    margin-bottom: 0;
    height: 0;
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
  }
`;

export const SkillsContent = styled.div`
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
