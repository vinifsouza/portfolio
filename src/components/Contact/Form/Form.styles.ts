import styled from 'styled-components';

export default styled.form`
  .form-control {
    width: 25rem;
  }

  .btnSumbit {
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    height: 3rem;
    font-size: 1.4rem;
  }

  textarea {
    font-size: 1.4rem;
    height: 6rem;
    width: 100%;
  }

  font-size: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
