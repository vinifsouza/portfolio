import React, { useEffect } from 'react';

import { DIRECTION_OPTIONS } from '../../constants/scrollIcon';
import { REACT_APP_BLIP_KEY } from '../../config';
import { ScrollToIcon } from './../ScrollToIcon/index';

const { BlipChat } = require('blip-chat-widget');

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  useEffect(() => {
    (function () {
      window.onload = function () {
          let blipClient = new BlipChat()
          .withAppKey(REACT_APP_BLIP_KEY)
          .withButton({"color":"#4e148c","icon":""})
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
