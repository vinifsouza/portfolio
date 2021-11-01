import Lottie from 'react-lottie';
import React from 'react';
import animationData from './neptune.json';
import styled from 'styled-components';

const PlanetWrapper = styled.span`
  display: flex;
`;

export default function Planet() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    redererSettings: {
      preserveAspecRatio: 'xMidYMid slice',
    },
  };

  return (
    <PlanetWrapper>
      <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        isStopped={false}
        isPaused={false}
        isClickToPauseDisabled={true}
      />
    </PlanetWrapper>
  );
}
