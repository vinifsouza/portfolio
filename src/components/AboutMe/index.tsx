import { Asset, Container, Content, Main } from '../../styles/DefaultStyles';

import { ANIMATIONS } from '../../constants/animation';
import Animation from '../../shared/Animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from '../../shared/Footer';
import React from 'react';

export default function AboutMe() {
  return (
    <Main theme="blue" id="about-me">
      <Container>
        <Asset role="center">
          <h1>Sobre mim</h1>
          <Animation animation={ANIMATIONS.ATOM} width={'50%'} speed={0.15} />
        </Asset>

        <Content role="center">
          <p>
            {`
            Tenho 23 anos. Moro em Sorocaba, SP, Brasil.
            Curso o quinto semestre em Análise e Desenvolvimento de Sistemas
            e tenho estudado sobre back-end e inteligência artifilical.
            \n\n
            Trabalho atualmente com desenvolvimento e manutenção de bots para atendimento de clientes
            através de e-mail, webchat e redes sociais, como WhatsApp, Facebook Messenger e Instagram.
            Nesses projetos atuo com Node.js, TypeScript, Python, spaCy, Docker, banco de dados
            relacional (SQL e MySQL) e não relacional (Elasticsearch).
            `}
          </p>
        </Content>
      </Container>
      <Footer target="skills" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  );
}
