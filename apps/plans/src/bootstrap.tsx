import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/plan';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App
      // setSelectedPlan={() => {return;}}
      nextCallback={() => {
        return;
      }}
      // planList={[]}
      // handleChange={()=> {return ;}} state={{}}
    />
  </StrictMode>
);
