import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import BasicDetails from './app/quote'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <BasicDetails nextCallback={() => { return;}} setPlanList={() => { return;}} /> */}
    <BasicDetails nextCallback={() => { return;}}></BasicDetails>

  </StrictMode>
);
