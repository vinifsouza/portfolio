import * as S from './styled';

import { MDBBtn, MDBIcon } from 'mdbreact';

import { Footer } from '../../shared/Footer';
import React from 'react';
import SpaceSuitAnimation from './SpaceSuitAnimation/index';

export default function Contact() {
  const labelColor = 'white-text';

  return (
    <S.Main>
      <S.Container id="contact">
        <S.ColLeft>
          <SpaceSuitAnimation />
        </S.ColLeft>

        <S.ColRight>
          <S.Header>Vamos trabalhar juntos?</S.Header>
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

          <S.Links>
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
          </S.Links>
        </S.ColRight>
      </S.Container>
      <Footer target="home" />
    </S.Main>
  );
}
