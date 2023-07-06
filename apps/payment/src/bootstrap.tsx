import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';

import Payment from './app/payment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Payment
      nextCallback={() => {
        return;
      }}
    />
  </StrictMode>
);
