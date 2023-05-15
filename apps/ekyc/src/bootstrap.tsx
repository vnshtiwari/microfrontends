import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Ekyc from './app/ekyc';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Ekyc basicData={{}} setBasicData={()=> {return ;}} nextCallback={()=> {return;}} />
  </StrictMode>
);
