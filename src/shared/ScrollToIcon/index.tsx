import React from 'react';
import { Link } from 'react-scroll';

import Animation from 'shared/Animation';
import { ANIMATIONS } from 'constants/animation';
import { DIRECTION_OPTIONS } from 'constants/scrollIcon';
import IconWrapper from './styles';

export function ScrollToIcon(prop: {
  target: string;
  direction: DIRECTION_OPTIONS;
}) {
  const { direction, target } = prop;

  const animationData =
    direction === DIRECTION_OPTIONS.TOP ? ANIMATIONS.TO_TOP : ANIMATIONS.TO_BOT;

  const animationWidth = direction === DIRECTION_OPTIONS.BOT ? '70%' : '10%';

  return (
    <Link activeClass="active" to={target} spy smooth duration={1000}>
      <IconWrapper>
        <Animation animation={animationData} width={animationWidth} />
      </IconWrapper>
    </Link>
  );
}
