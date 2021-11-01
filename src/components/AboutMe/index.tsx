import * as S from './styled';

import AtomAnimation from './AtomAnimation/index';
import { DIRECTION_OPTIONS } from '../../constants/directionOptions';
import { Footer } from '../../shared/Footer';
import React from 'react';

export default function AboutMe() {
  return (
    <S.Main>
      <S.Container id="about-me">
        <S.ColLeft>
          <AtomAnimation />
        </S.ColLeft>

        <S.ColRight>
          <S.AboutMeContent>
            <S.Header>Sobre mim</S.Header>
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
          </S.AboutMeContent>
        </S.ColRight>
      </S.Container>
      <Footer target="skills" direction={DIRECTION_OPTIONS.BOT} />
    </S.Main>
  );
}
