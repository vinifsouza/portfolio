import React from 'react';
import { SkillHideWrapper, SkillWrapper } from './style';

import Planet from './../../../shared/Planet/index';
import neptune from '../../../assets/images/neptune.png';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

function SkillHide() {
  const { width } = useWindowDimensions();

  return (
    <SkillHideWrapper>
      <img src={neptune} alt="Level hiden" width={width > 320 ? "35px" : "20px"}></img>
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
