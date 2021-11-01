import Lottie from 'react-lottie-player';
import React from 'react';
import animationData from './spacesuit-dashboard.json';

export default function SpaceSuitAnimation() {
  return (
    <Lottie
      style={{ width: 480, height: 480, alignSelf: 'center' }}
      loop
      play
      animationData={animationData}
      speed={0.25}
    />
  );
}
