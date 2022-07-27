import React from 'react';
import { MDBIcon } from 'mdbreact';

import Animation from '../../shared/Animation';
import Form from './Form';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Asset, Container, Content, Main } from '../../styles/DefaultStyles';
import { ANIMATIONS } from '../../constants/animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from '../../shared/Footer';
import { Links } from './styled';

export default function Contact() {
  const { width } = useWindowDimensions();

  return (
    <Main id="contact" theme="blue">
      <Container role="right">
        <Asset role="center">
          <h1>Contato</h1>
          <h3>Vamos trabalhar juntos?</h3>
          <Animation animation={ANIMATIONS.SPACESUIT_DASHBOARD} width={'50%'} />
        </Asset>

        <Content role="center">

          <Form />

          <Links>
            <a
              href="https://www.linkedin.com/in/viniciusfersouza/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              <MDBIcon fab icon="linkedin" />
            </a>

            <a
              href="https://github.com/vinifsouza"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              <MDBIcon fab icon="github" />
            </a>

            <a
              href="mailto:vinicius.souza90@fatec.sp.gov.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              <MDBIcon icon="envelope" />
            </a>
          </Links>
        </Content>
      </Container>

      {width &&
        width > 425 ? <Footer target="home" direction={DIRECTION_OPTIONS.TOP} /> : <></>}
    </Main>
  );
}
