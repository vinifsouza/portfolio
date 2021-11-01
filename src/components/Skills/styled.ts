import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  color: #fff;

  justify-content: center;
  align-items: center;

  background: url('/assets/images/header-line-blue.svg'), #090e12;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  color: #fff;
`;

export const ColLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ColRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.section`
  font-size: 5rem;
  margin-bottom: 0.8rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  font-size: 24px;
  padding-left: 1rem;
`;
