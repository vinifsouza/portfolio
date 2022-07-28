import React from 'react';

import Planet from 'shared/Planet/index';
import neptune from 'assets/images/neptune.png';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { SkillHideWrapper, SkillWrapper } from './styles';

function SkillHide() {
  const { width } = useWindowDimensions();

  return (
    <SkillHideWrapper>
      <img
        src={neptune}
        alt="Level hiden"
        width={width > 320 ? '35px' : '20px'}
      />
    </SkillHideWrapper>
  );
}

export default function Skill(prop: { name: string; level: number }) {
  const { level, name } = prop;

  return (
    <SkillWrapper>
      <div className="name">
        <i>{name}</i>
      </div>

      <div className="levels">
        {level >= 0
          ? Array.from(Array(level), (_, i) => <Planet key={`skill-${i}`} />)
          : ''}
        {level >= 0
          ? Array.from(Array(5 - level), (_, i) => (
              <SkillHide key={`skillHide-${i}`} />
            ))
          : ''}
      </div>
    </SkillWrapper>
  );
}
