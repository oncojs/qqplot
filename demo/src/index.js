import React from 'react';
import { render } from 'react-dom';

import QQPlot from '../../src';

const data = [
  13248,
  12906,
  18480,
  20503,
  27082,
  17189,
  23392,
  23617,
  21899,
  14729,
  26092,
  26748,
  30692,
  21335,
  16719,
  17829,
  24760,
  23102,
  22204,
  26808,
  23474
];

const Demo = () => (
  <div
    style={{
      height: '100vh',
      left: 0,
      position: 'absolute',
      right: 0,
      width: '100vw',
    }}
  >
    <QQPlot
      data={data}
      height={500}
    />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
