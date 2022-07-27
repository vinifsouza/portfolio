import styled from 'styled-components';

export const ColLeft = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ColRight = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Salute = styled.div`
  display: block;
  span {
    font-size: 2rem;
  }

  @media (max-width: 630px) {
    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    span {
      font-size: 1rem;
    }
  }
`;

export const Name = styled.div`
  font-size: 8rem;
  font-weight: bold;

  @media (max-width: 770px) {
    font-size: 6rem;
  }

  @media (max-width: 630px) {
    font-size: 4rem;
  }

  @media (max-width: 375px) {
    font-size: 3rem;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;
