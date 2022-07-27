import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Animation/data/neptune.json';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { PlanetWrapper } from './styled';


export default function Planet() {
  const { width } = useWindowDimensions();

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
