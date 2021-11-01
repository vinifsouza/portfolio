import Planet from './../../../shared/Planet/index';
import React from 'react';
import neptune from '../../../assets/images/neptune.png';
import styled from 'styled-components';

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0 1rem 0;
  font-size: 1.5rem;

  i {
    font-style: normal;
    margin-right: 1rem;
    &:before {
      content: '=> ';
    }
  }

  .levels {
    display: flex;
    flex-direction: row;
  }
`;

const SkillHideWrapper = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 5px;
  mix-blend-mode: luminosity;
`;

function SkillHide() {
  return (
    <SkillHideWrapper>
      <img src={neptune} alt="Level hiden"></img>
    </SkillHideWrapper>
  );
}

export default function Skill(prop: { name: string; level: number }) {
  return (
    <SkillWrapper>
      <div className="name">
        <i>{prop.name}</i>
      </div>

      <div className="levels">
        {prop.level >= 0
          ? Array.from(Array(prop.level), (_, i) => (
              <Planet key={'skill-' + i} />
            ))
          : ''}
        {prop.level >= 0
          ? Array.from(Array(5 - prop.level), (_, i) => (
              <SkillHide key={'skillHide-' + i} />
            ))
          : ''}
      </div>
    </SkillWrapper>
  );
}
