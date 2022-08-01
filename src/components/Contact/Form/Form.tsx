import React from 'react';

import { MDBBtn, MDBIcon, MDBNotification } from 'mdbreact';
import { ValidationError, useForm } from '@formspree/react';

import FormWrapper from './Form.styles';

export default function Form() {
  const [state, handleSubmit] = useForm('meqvbzra');
  const labelColor = 'white-text';

  return (
    <>
      {state.succeeded && (
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
            position: 'fixed',
            top: '4rem',
            right: '1rem',
            zIndex: 9999,
          }}
        />
      )}
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="formContact-name" className={labelColor}>
          Seu nome
          <input
            type="text"
            id="formContact-name"
            className="form-control"
            required
          />
        </label>
        <br />
        <label htmlFor="formContact-email" className={labelColor}>
          Seu e-mail
          <input
            type="email"
            name="email"
            id="formContact-email"
            className="form-control"
            required
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="formContact-subject" className={labelColor}>
          Assunto
          <input
            type="text"
            id="formContact-subject"
            className="form-control"
            required
          />
        </label>
        <br />
        <label htmlFor="formContact-message" className={labelColor}>
          Mensagem
          <textarea
            id="formContact-message"
            name="message"
            className="form-control"
            required
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="text-center mt-4">
          <MDBBtn
            color="warning"
            outline
            type="submit"
            value="Submit"
            disabled={state.submitting}
          >
            <span className="btnSumbit">Enviar</span>
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </div>
      </FormWrapper>
    </>
  );
}
