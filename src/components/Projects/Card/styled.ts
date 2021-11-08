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
