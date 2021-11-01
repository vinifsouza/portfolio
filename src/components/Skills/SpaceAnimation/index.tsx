import Lottie from 'react-lottie-player';
import React from 'react';
import animationData from './space.json';
import styled from 'styled-components';

const SpaceWrapper = styled.span``;

export default function SpaceAnimation() {
  return (
    <SpaceWrapper>
      <Lottie
        style={{ width: 512, height: 512 }}
        loop
        play
        animationData={animationData}
        speed={0.1}
        segments={[150, 240]}
      />
    </SpaceWrapper>
  );
}
