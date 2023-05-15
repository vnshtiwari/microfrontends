import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import PersonalisedQuote from './app/PersonalisedQuote'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <PersonalisedQuote nextCallback={()=> {return ;}} selectedPlan={{}} />
  </StrictMode>
);
