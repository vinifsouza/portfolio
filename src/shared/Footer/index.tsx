import React, { useEffect } from 'react';

import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { ScrollToIcon } from './../ScrollToIcon/index';

const { BlipChat } = require('blip-chat-widget');

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  useEffect(() => {
    (function () {
      window.onload = function () {
          new BlipChat()
          .withAppKey('cG9ydGZvbGlvMjo2ZTg2ZjU1Yy0wN2FkLTRkMTItYTQ3Zi04N2ZmMThhNjEzYzQ=')
          .withButton({"color":"#4e148c"})
          .withCustomCommonUrl('https://vinicius-souza-vdzec.chat.blip.ai/')
          .build();
      }
  })();
  }, []);

  return (
    <>
      <ScrollToIcon target={prop.target} direction={prop.direction} />
    </>
  );
}
