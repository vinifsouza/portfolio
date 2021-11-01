import Lottie from 'react-lottie-player';
import React from 'react';
import animationData from './space.json';

export default function SpaceAnimation() {
  return (
    <Lottie
      style={{ width: 512, height: 512 }}
      loop
      play
      animationData={animationData}
      speed={0.3}
      segments={[150, 240]}
    />
  );
}
