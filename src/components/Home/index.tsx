import React from 'react';

import Animation from 'shared/Animation/index';
import { ANIMATIONS } from 'constants/animation';
import { Container, Main } from 'styles/DefaultStyles';
import { DIRECTION_OPTIONS } from 'constants/scrollIcon';
import { Footer } from 'shared/Footer';
import { Name, Salute, ColLeft, ColRight } from './styles';

export default function Home() {
  return (
    <Main id="home" theme="black">
      <Container>
        <ColLeft>
          <Salute>
            <span>Olá, eu sou</span>
            <Name>Vinícius Souza</Name>
            <span>desenvolvedor back-end</span>
          </Salute>
        </ColLeft>

        <ColRight className='animation'>
          <Animation animation={ANIMATIONS.ASTRONAUT} width={'60%'} />
        </ColRight>
      </Container>

      <Footer target="about-me" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  );
}
