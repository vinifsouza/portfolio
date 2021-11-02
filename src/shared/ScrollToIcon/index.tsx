import React, { useState } from 'react';

import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Link } from 'react-scroll';
import Lottie from 'react-lottie';
import animationDataToBot from './animation-bot.json';
import animationDataToTop from './animation-top.json';
import styled from 'styled-components';

const IconWrapper = styled.footer`
  cursor: pointer;
  top: -150px;
`;

export function ScrollToIcon(prop: {
  target: string;
  direction: DIRECTION_OPTIONS;
}) {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  let animationData: any = '';

  if (prop.direction === DIRECTION_OPTIONS.TOP) {
    animationData = animationDataToTop;
  } else {
    animationData = animationDataToBot;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    redererSettings: {
      preserveAspecRatio: 'xMidYMid slice',
    },
  };

  return (
    <Link
      activeClass="active"
      to={prop.target}
      spy={true}
      smooth={true}
      duration={1000}
    >
      <IconWrapper>
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </IconWrapper>
    </Link>
  );
}
