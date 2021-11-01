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
  justify-content: space-around;
`;

export const Header = styled.section`
  font-size: 4rem;
`;

export const ColLeft = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const ColRight = styled.aside`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  width: 50%;
  height: 100%;

  form {
    width: 50%;
  }
`;

export const Links = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  display: flex;

  text-decoration: none;

  a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    text-decoration: none !important;
  }
`;
