import { Asset, Container, Content, Main } from '../../styles/DefaultStyles';
import { MDBBtn, MDBIcon, MDBNotification } from 'mdbreact';
import { ValidationError, useForm } from '@formspree/react';

import { ANIMATIONS } from '../../constants/animation';
import Animation from '../../shared/Animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from '../../shared/Footer';
import { Links } from './styled';
import React from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm("meqvbzra");

  const labelColor = 'white-text';

  return (
    <Main id="contact" theme="black">
      {state.succeeded &&
        <MDBNotification
          autohide={5000}
          show
          fade
          className="#1c2a48 mdb-color darken-3"
          titleClassName="unique-color-dark white-text"
          closeClassName="white-text"
          icon="envelope"
          iconClassName="green-text"
          title="E-mail enviado"
          message="Seu e-mail foi enviado com sucesso, responderei assim que possível. 🙃"
          text="Obrigado"
          style={{
            position: "fixed",
            top: "4rem",
            right: "1rem",
            zIndex: 9999
          }}
        />
      }
      <Container role="right">
        <Asset role="center">
          <h1>Contato</h1>
          <h3>Vamos trabalhar juntos?</h3>
          <Animation animation={ANIMATIONS.SPACESUIT_DASHBOARD} width={'50%'} />
        </Asset>

        <Content role="center">
          <form
            onSubmit={handleSubmit}
          >
            <label htmlFor="formContact-name" className={labelColor}>
              Seu nome
            </label>
            <input
              type="text"
              id="formContact-name"
              className="form-control"
              required
            />
            <br />
            <label  htmlFor="formContact-email" className={labelColor}>
              Seu e-mail
            </label>
            <input
              type="email"
              name="email"
              id="formContact-email"
              className="form-control"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <br />
            <label htmlFor="formContact-subject" className={labelColor}>
              Assunto
            </label>
            <input
              type="text"
              id="formContact-subject"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="formContact-message" className={labelColor}>
              Mensagem
            </label>
            <textarea
              id="formContact-message"
              name="message"
              className="form-control"
              rows={2}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit" value="Submit" disabled={state.submitting}>
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
      <Footer target="home" direction={DIRECTION_OPTIONS.TOP} />
    </Main>
  );
}
