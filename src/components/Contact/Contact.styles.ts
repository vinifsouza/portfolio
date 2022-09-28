import styled from 'styled-components';
import { Asset, Container, Content } from 'styles/DefaultStyles';

export const Links = styled.div`
  margin-top: 0rem;
  font-size: 2rem;
  display: flex;

  text-decoration: none;

  a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    text-decoration: none !important;
  }
`;

export const ContactContainer = styled(Container)`
  @media (max-width: 425px) {
    height: 100%;

    display: flex;
    flex-direction: column;
  }
`;

export const ContactAsset = styled(Asset)`
  @media (max-width: 425px) {
    height: 40% !important;

    display: flex;
    flex-direction: column;
    justify-content: end;
  }
`;

export const ContactContent = styled(Content)`
  @media (max-width: 425px) {
    height: 60% !important;
  }
`;
