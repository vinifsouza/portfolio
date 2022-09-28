import React from 'react';

import Animation from 'shared/Animation';
import { Main } from 'styles/DefaultStyles';
import { ANIMATIONS } from 'constants/animation';
import { DIRECTION_OPTIONS } from 'constants/scrollIcon';
import Footer from 'shared/Footer';
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  HeaderMobile,
  SkillAsset,
  SkillsContainer,
  SkillLevels,
  SkillsContent,
  SkillsLevelsContent,
} from './Skills.styles';
import Skill from './Skill';

export default function Skills() {
  const { width } = useWindowDimensions();

  return (
    <Main id="skills" theme="black">
      <SkillsContainer>
        <HeaderMobile className="section-title" role="center">
          <h1>Habilidades</h1>
        </HeaderMobile>
        <SkillsContent role="center" is="column" className="skills-content">
          <SkillLevels className="skills">
            <div className="back-end">
              <h2> Back-end </h2>
              <SkillsLevelsContent>
                <Skill name="Python" level={3} />{' '}
                <Skill name="Node.js" level={3} />{' '}
                <Skill name="TypeScript" level={3} />{' '}
                <Skill name="SQL/MySQL" level={3} />{' '}
              </SkillsLevelsContent>
            </div>

            <div className="development-tools">
              <h2> Ferramentas </h2>
              <SkillsLevelsContent>
                <Skill name="Git" level={-1} />{' '}
                <Skill name="Docker" level={-1} />{' '}
                <Skill name="Github" level={-1} />{' '}
                <Skill name="BitBucket" level={-1} />{' '}
              </SkillsLevelsContent>
            </div>
          </SkillLevels>
        </SkillsContent>

        <SkillAsset role="center">
          <h1 className="section-title-m">Habilidades</h1>
          <Animation
            animation={ANIMATIONS.SPACE}
            segments={[129, 196]}
            speed={0.08}
            width={width > 425 ? '50%' : '40%'}
          />
        </SkillAsset>
      </SkillsContainer>
      <Footer target="contact" direction={DIRECTION_OPTIONS.BOT} />
    </Main>
  );
}
