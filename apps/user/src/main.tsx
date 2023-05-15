import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import User from './app/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <User />
  </StrictMode>
);
