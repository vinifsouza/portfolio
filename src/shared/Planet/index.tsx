import React from 'react';
import Lottie from 'lottie-react';
import animationData from './neptune.json';
import styled from 'styled-components';

const PlanetWrapper = styled.span`
  display: flex;
`;

export default function Planet() {
  return (
    <PlanetWrapper>
      <Lottie
        loop
        autoplay
        animationData={animationData}
        style={{
          width: 40
        }}
      />
    </PlanetWrapper>
  );
}
