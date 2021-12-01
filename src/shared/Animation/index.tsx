import Lottie from 'react-lottie-player';
import React from 'react';

interface AnimationProps {
  width?: string | number;
  height?: string | number;
  animation: string;
  segments?: any;
  speed?: number;
}

const defaultProps = {
  width: '100%',
  height: undefined,
  segments: undefined,
  speed: 1,
};

const Animation: React.FunctionComponent<AnimationProps> = props => {
  const { width, height, animation, segments, speed } = props;

  const animationData = require(`./data/${animation}`);

  return (
    <Lottie
      style={{ width, height }}
      loop
      play
      animationData={animationData}
      speed={speed}
      segments={segments}
    />
  );
};

Animation.defaultProps = defaultProps;

export default Animation;
