import React from 'react';
import Lottie from 'lottie-react';
import animationData from './neptune.json';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const PlanetWrapper = styled.span`
  display: flex;
`;

export default function Planet() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { height, width } = useWindowDimensions();

  return (
    <PlanetWrapper>
      <Lottie
        loop
        autoplay
        animationData={animationData}
        style={{
          width: width > 320 ? 40 : 20
        }}
      />
    </PlanetWrapper>
  );
}
