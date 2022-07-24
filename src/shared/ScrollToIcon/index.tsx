import React from 'react';

import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { Link } from 'react-scroll';
import Lottie from 'lottie-react';
import animationDataToBot from './animation-bot.json';
import animationDataToTop from './animation-top.json';
import styled from 'styled-components';

const IconWrapper = styled.div`
  cursor: pointer;
  max-height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export function ScrollToIcon(prop: {
  target: string;
  direction: DIRECTION_OPTIONS;
}) {

  let animationData: any = '';

  if (prop.direction === DIRECTION_OPTIONS.TOP) {
    animationData = animationDataToTop;
  } else {
    animationData = animationDataToBot;
  }

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
          loop
          autoplay
          animationData={animationData}
          style={{ width: prop.direction === DIRECTION_OPTIONS.BOT ? '70%' : '10%' }}
        />
      </IconWrapper>
    </Link>
  );
}
