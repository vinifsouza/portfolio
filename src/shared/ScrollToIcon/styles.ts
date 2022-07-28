import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  max-height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
