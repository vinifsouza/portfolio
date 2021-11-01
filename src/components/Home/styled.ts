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

  background: #090e12;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  color: #fff;
`;

export const ColLeft = styled.div`
  width: 50%;
`;

export const ColRight = styled.div``;

export const Salute = styled.div`
  display: block;
  span {
    font-size: 1.2rem;
  }
`;

export const Name = styled.div`
  font-size: 6rem;
  font-weight: bold;
`;
