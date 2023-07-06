import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Product from './app/products';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Product
      nextCallback={() => {
        return;
      }}
      setPlanList={() => {
        return;
      }}
    />
  </StrictMode>
);
