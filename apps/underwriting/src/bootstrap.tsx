import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';

import InsuranceQuestionnair from './app/underwriting.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <InsuranceQuestionnair nextCallback={()=> {return;}} />
  </StrictMode>
);
