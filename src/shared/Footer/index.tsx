import React, { useEffect } from 'react';

import { DIRECTION_OPTIONS } from 'constants/scrollIcon';
import blipchat from 'services/blipchat/script';
import { ScrollToIcon } from 'shared/ScrollToIcon';

export function Footer(prop: { target: string; direction: DIRECTION_OPTIONS }) {
  useEffect(() => { blipchat() }, []);

  return (
    <>
      <ScrollToIcon target={prop.target} direction={prop.direction} />
    </>
  );
}
