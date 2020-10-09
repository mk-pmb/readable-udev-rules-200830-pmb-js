// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import rulify from '..';


test('NetworkManager unmanage interface', async(t) => {
  const readableRule = {
    match: { ACTION: 'add', SUBSYSTEM: 'net', KERNEL: 'eth*' },
    // ^-- i.e., match any device /sys/class/net/eth*

    setEnv: { NM_UNMANAGED: '1' },
  };

  t.equal(rulify([readableRule]),
    'ACTION=="add", SUBSYSTEM=="net", KERNEL=="eth*", ENV{NM_UNMANAGED}="1"');
});
