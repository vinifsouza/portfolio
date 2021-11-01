import { Link } from 'react-scroll';
import Lottie from 'react-lottie';
import React from 'react';
import animationData from './animation1.json';
import styled from 'styled-components';
import { useState } from 'react';

const IconWrapper = styled.footer`
  cursor: pointer;
  top: -150px;
`;

export function ScrollToIcon(prop: { target: string }) {
  const [animationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
