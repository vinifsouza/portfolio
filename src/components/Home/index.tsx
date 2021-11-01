import * as S from './styled';

import AstronautAnimation from './AstronautAnimation/index';
import { DIRECTION_OPTIONS } from '../../constants/directionOptions';
import { Footer } from './../../shared/Footer';
import React from 'react';

export default function Home() {
  return (
    <S.Main>
      <S.Container id="home">
        <S.ColLeft>
          <S.Salute>
            <span>Olá, eu sou</span>
            <S.Name>Vinícius Souza</S.Name>
            <span>desenvoledor back-end</span>
          </S.Salute>
        </S.ColLeft>

        <S.ColRight>
          <AstronautAnimation />
        </S.ColRight>
      </S.Container>

      <Footer target="about-me" direction={DIRECTION_OPTIONS.BOT} />
    </S.Main>
  );
}
