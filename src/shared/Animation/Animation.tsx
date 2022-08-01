import Lottie from 'react-lottie-player';
import React from 'react';

interface AnimationProps {
  width?: string | number;
  height?: string | number;
  animation: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  segments?: any;
  speed?: number;
}

const defaultProps = {
  width: '100%',
  height: undefined,
  segments: undefined,
  speed: 1,
};

// eslint-disable-next-line react/function-component-definition
const Animation: React.FunctionComponent<AnimationProps> = props => {
  const { width, height, animation, segments, speed } = props;

  // eslint-disable-next-line max-len
  // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
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
