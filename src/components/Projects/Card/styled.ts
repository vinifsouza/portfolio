import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 18.75rem;
  height: 18.75rem;

  background-image: ${props => `url(${props.theme})`};
  background-position: center;
  background-size: cover;

  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;

  height: 8rem;
  width: 100%;
  padding: 0.5rem;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Description = styled.p`
  margin-top: 0.2rem;
  font-size: 0.8rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const Icons = styled.div`
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
`;

export const Link = styled.div`
  position: absolute;
  left: 0.3rem;
  bottom: 0.3rem;

  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      opacity: 0.6;
    }
  }

  span {
    user-select: none;
  }
`;

export const Ribbon = styled.div`
  width: 200px;
  height: 300px;
  position: relative;

  .ribbon {
    position: absolute;
    left: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
  }
  .ribbon span {
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    width: 100px;
    display: block;
    background: #79a70a;
    background: linear-gradient(#9bc90d 0%, #79a70a 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    left: -21px;
  }
  .ribbon span::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #79a70a;
    border-top: 3px solid #79a70a;
  }
  .ribbon span::after {
    content: '';
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #79a70a;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #79a70a;
  }
`;
