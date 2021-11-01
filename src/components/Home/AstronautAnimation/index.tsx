import Lottie from 'react-lottie-player';
import animationData from './astronaut.json';

export default function AstronautAnimation() {
  return (
    <Lottie
      style={{ width: 720, height: 720, alignSelf: 'center' }}
      loop
      play
      animationData={animationData}
      speed={0.25}
    />
  );
}
