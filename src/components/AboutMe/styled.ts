import headerLineBlack from '../../assets/images/header-line-black.svg';
import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  color: #fff;

  justify-content: space-around;
  align-items: center;

  background: url(${headerLineBlack}), #0d141e;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ColLeft = styled.aside`
  width: 50%;
`;

export const ColRight = styled.aside`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;
`;

export const AboutMeContent = styled.article`
  display: block;
`;

export const Header = styled.section`
  font-size: 5rem;
`;
