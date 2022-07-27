import React from 'react';

import Animation from '../Animation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ANIMATIONS } from '../../constants/animation';
import { PlanetWrapper } from './styled';


export default function Planet() {
  const { width } = useWindowDimensions();

  return (
    <PlanetWrapper>
      <Animation
        animation={ANIMATIONS.NEPTUNE}
        width={width > 320 ? 40 : 20}
      />
    </PlanetWrapper>
  );
}
