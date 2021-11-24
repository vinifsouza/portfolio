import React, { useEffect } from 'react';

import { BLIP_APP_KEY } from '../../config';
import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { ScrollToIcon } from './../ScrollToIcon/index';

const { BlipChat } = require('blip-chat-widget');

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  useEffect(() => {
    (function () {
      window.onload = function () {
          let blipClient = new BlipChat()
          .withAppKey(BLIP_APP_KEY)
          .withButton({"color":"#4e148c"})
          .withCustomCommonUrl('https://vinicius-souza-vdzec.chat.blip.ai/')
          .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
            blipClient.sendMessage({
              type: "text/plain",
              content: "Olá"
            });
          })
          blipClient.build();
      }
  })();
  }, []);

  return (
    <>
      <ScrollToIcon target={prop.target} direction={prop.direction} />
    </>
  );
}
