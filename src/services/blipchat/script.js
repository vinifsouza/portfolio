/* eslint-disable func-names */
import { REACT_APP_BLIP_KEY } from '../../config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BlipChat } = require('blip-chat-widget');

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  window.onload = function () {
    const blipClient = new BlipChat()
      .withAppKey(REACT_APP_BLIP_KEY)
      .withButton({ color: '#4e148c', icon: '' })
      .withCustomCommonUrl('https://vinicius-souza-vdzec.chat.blip.ai/')
      .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
        blipClient.sendMessage({
          type: 'text/plain',
          content: 'Olá',
        });
      });
    blipClient.build();
  };
}
