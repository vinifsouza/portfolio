import styled from 'styled-components';

import headerLineBlack from 'assets/images/header-line-black.svg';
import headerLineBlue from 'assets/images/header-line-blue.svg';

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
    // eslint-disable-next-line no-nested-ternary
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

  height: 80%;
  width: 100%;
  padding: 2rem;

  @media (max-width: 425px) {
    flex-direction: column;

    aside {
      height: 50%;
      width: 90%;
    }

    margin-bottom: 1rem;
  }
`;

export const Content = styled.aside`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;

  flex-direction: ${props => (props.is === 'row' ? 'row' : 'column')};
  justify-content: ${props => props.role};

  .form-control:focus {
    border-color: #6265e4 !important;
    box-shadow: 0 0 0.8rem rgba(98, 101, 228, 1) !important;
  }

  .form-control {
    caret-color: auto;
  }
`;

export const Asset = styled.aside`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  flex-direction: ${props => (props.is === 'row' ? 'row' : 'column')};
  justify-content: ${props => props.role};
`;
