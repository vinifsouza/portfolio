import headerLineBlack from '../assets/images/header-line-black.svg';
import headerLineBlue from '../assets/images/header-line-blue.svg';
import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  color: #fff;
  background-color: ${props =>
    props.theme === 'blue' ? '#0d141e' : '#090e12'};

  background-image: ${props =>
    props.id !== 'home'
      ? props.theme === 'blue'
        ? `url(${headerLineBlack})`
        : `url(${headerLineBlue})`
      : ''};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 75%;
  width: 100%;
  padding: 2rem;
`;

export const Content = styled.aside`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;

  flex-direction: ${props => (props.is === 'row' ? 'row' : 'column')};
  justify-content: ${props => props.role};
`;

export const Asset = styled.aside`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  flex-direction: ${props => (props.is === 'row' ? 'row' : 'column')};
  justify-content: ${props => props.role};
`;
