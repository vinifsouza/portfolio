import { Asset, Container, Content, Main } from '../../styles/DefaultStyles';
import { MDBBtn, MDBIcon } from 'mdbreact';

import { ANIMATIONS } from '../../constants/animation';
import Animation from '../../shared/Animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from '../../shared/Footer';
import { Links } from './styled';
import React from 'react';

export default function Contact() {
  const labelColor = 'white-text';

  return (
    <Main id="contact" theme="blue">
      <Container role="right">
        <Asset role="center">
          <h1>Contato</h1>
          <h3>Vamos trabalhar juntos?</h3>
          <Animation animation={ANIMATIONS.SPACESUIT_DASHBOARD} width={'50%'} />
        </Asset>

        <Content role="center">
          <form>
            <label htmlFor="formContact-name" className={labelColor}>
              Seu nome
            </label>
            <input type="text" id="formContact-name" className="form-control" />
            <br />
            <label htmlFor="formContact-email" className={labelColor}>
              Seu e-mail
            </label>
            <input
              type="email"
              id="formContact-email"
              className="form-control"
            />
            <br />
            <label htmlFor="formContact-subject" className={labelColor}>
              Assunto
            </label>
            <input
              type="text"
              id="formContact-subject"
              className="form-control"
            />
            <br />
            <label htmlFor="formContact-message" className={labelColor}>
              Mensagem
            </label>
            <textarea
              id="formContact-message"
              className="form-control"
              rows={2}
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Enviar
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>

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
              href="mailto:vinicius.fernando.souza@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {' '}
              <MDBIcon icon="envelope" />
            </a>
          </Links>
        </Content>
      </Container>
      <Footer target="home" direction={DIRECTION_OPTIONS.TOP} />
    </Main>
  );
}
