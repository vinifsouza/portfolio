import React from 'react';

import Animation from '../../shared/Animation';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Link } from 'react-scroll';
import { IconWrapper } from './styles';
import { ANIMATIONS } from '../../constants/animation';

export function ScrollToIcon(prop: {
  target: string;
  direction: DIRECTION_OPTIONS;
}) {

  const animationData =
    prop.direction === DIRECTION_OPTIONS.TOP
      ? ANIMATIONS.TO_TOP
      : ANIMATIONS.TO_BOT;

  const animationWidth =
    prop.direction === DIRECTION_OPTIONS.BOT ? '70%' : '10%';

  return (
    <Link
      activeClass="active"
      to={prop.target}
      spy={true}
      smooth={true}
      duration={1000}
    >
      <IconWrapper>
        <Animation
          animation={animationData}
          width={animationWidth}
        />
      </IconWrapper>
    </Link>
  );
}
