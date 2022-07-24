import styled from 'styled-components';

export const SkillsContainer = styled.div`
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
