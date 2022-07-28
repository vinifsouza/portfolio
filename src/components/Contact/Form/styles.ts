import styled from 'styled-components';

export const FormWrapper = styled.form`
  input {
    width: 25rem;
    height: 3rem;

    font-size: 1.4rem;
  }

  textarea {
    font-size: 1.4rem;
    height: 6rem;
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
