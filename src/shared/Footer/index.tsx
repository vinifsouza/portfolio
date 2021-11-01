import React from 'react';
import { ScrollToIcon } from './../ScrollToIcon/index';
import { Wrapper } from './styled';

export function Footer(prop: { target: string }) {
  return (
    <Wrapper>
      <ScrollToIcon target={prop.target} />
    </Wrapper>
  );
}
