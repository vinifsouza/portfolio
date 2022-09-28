import React from 'react';

import Animation from 'shared/Animation';
import { ANIMATIONS } from 'constants/animation';
import { DIRECTION_OPTIONS } from 'constants/scrollIcon';
import { Asset, Container, Content, Main } from 'styles/DefaultStyles';
import Footer from 'shared/Footer';
import { calculateAge } from 'utils/date';

export default function AboutMe() {
  const age = calculateAge(11, 4, 1998);
  return (
    <Main theme="blue" id="about-me">
      <Container>
        <Asset role="center">
          <h1>Sobre mim</h1>
          <Animation animation={ANIMATIONS.ATOM} width="50%" speed={0.15} />
        </Asset>

        <Content role="center">
          <p>
            {`
            Tenho ${age} anos. Moro em Sorocaba, SP, Brasil.
            Curso o sétimo semestre em Análise e Desenvolvimento de Sistemas,
             tenho estudado sobre back-end e engenharia de dados.
            \n\n
            Trabalho principalmente com integrações entre serviços (middlewares),
            cloud e configurações de CI/CD. Você pode conferir mais detalhes no meu LinkedIn,
            `}{' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/viniciusfersouza"
              rel="noreferrer"
            >
              clicando aqui
            </a>
            .
          </p>
        </Content>
      </Container>
      <Footer target="skills" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  );
}
