import { Asset, Container, Content, Main } from '../../styles/DefaultStyles';
import { SkillsContainer, SkillsContent } from './styled';

import { ANIMATIONS } from '../../constants/animation';
import Animation from '../../shared/Animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Footer } from './../../shared/Footer';
import React from 'react';
import Skill from './Skill/index';

export default function Skills() {
  return (
    <Main id="skills" theme="black">
      <Container>
        <Content role="center" is="column">
          <SkillsContainer>
            <div className="back-end">
              <h2> Back-end </h2>
              <SkillsContent>
                <Skill name="Python" level={3} />{' '}
                <Skill name="Node.js" level={2} />{' '}
                <Skill name="TypeScript" level={2} />{' '}
                <Skill name="SQL/MySQL" level={2} />{' '}
              </SkillsContent>
            </div>

            <div className="development-tools">
              <h2> Ferramentas </h2>
              <SkillsContent>
                <Skill name="Git" level={-1} />{' '}
                <Skill name="Docker" level={-1} />{' '}
                <Skill name="Github" level={-1} />{' '}
                <Skill name="BitBucket" level={-1} />{' '}
              </SkillsContent>
            </div>
          </SkillsContainer>
        </Content>

        <Asset role="center">
          <h1>Habilidades</h1>
          <Animation
            animation={ANIMATIONS.SPACE}
            segments={[129, 196]}
            speed={0.08}
            width={'50%'}
          />
        </Asset>
      </Container>

      <Footer target="projects" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  );
}
