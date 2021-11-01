import * as S from './styled';

import { Footer } from './../../shared/Footer';
import React from 'react';
import Skill from './Skill/index';
import Space from './SpaceAnimation/index';

export default function Skills() {
  return (
    <S.Main>
      <S.Container id="skills">
        <S.ColLeft>
          <S.Header>Habilidades</S.Header>
          <S.SkillsContainer>
            <div className="back-end">
              <h3> Back-end </h3>
              <S.SkillsContent>
                <Skill name="Python" level={3} />{' '}
                <Skill name="Node.js" level={2} />{' '}
                <Skill name="TypeScript" level={2} />{' '}
                <Skill name="SQL/MySQL" level={2} />{' '}
              </S.SkillsContent>
            </div>

            <div className="development-tools">
              <h3> Ferramentas de Desenvolvimento </h3>
              <S.SkillsContent>
                <Skill name="Git" level={-1} />{' '}
                <Skill name="Docker" level={-1} />{' '}
                <Skill name="Github" level={-1} />{' '}
                <Skill name="BitBucket" level={-1} />{' '}
              </S.SkillsContent>
            </div>
          </S.SkillsContainer>
        </S.ColLeft>

        <S.ColRight>
          <Space />
        </S.ColRight>
      </S.Container>

      <Footer target="contact" />
    </S.Main>
  );
}
