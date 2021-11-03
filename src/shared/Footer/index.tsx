import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import React from 'react';
import { ScrollToIcon } from './../ScrollToIcon/index';

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  return <ScrollToIcon target={prop.target} direction={prop.direction} />;
}
