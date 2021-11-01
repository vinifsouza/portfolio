import { DIRECTION_OPTIONS } from '../../constants/directionOptions';
import React from 'react';
import { ScrollToIcon } from './../ScrollToIcon/index';
import { Wrapper } from './styled';

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  return (
    <Wrapper>
      <ScrollToIcon target={prop.target} direction={prop.direction} />
    </Wrapper>
  );
}
