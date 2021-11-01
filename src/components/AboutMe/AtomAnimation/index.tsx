import Lottie from 'react-lottie-player';
import React from 'react';
import animationData from './atom.json';

export default function AtomAnimation() {
  return (
    <Lottie
      style={{ width: 624, height: 624, alignSelf: 'center' }}
      loop
      play
      animationData={animationData}
      speed={0.25}
    />
  );
}
