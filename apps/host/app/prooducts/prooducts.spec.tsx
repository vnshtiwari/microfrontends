import { render } from '@testing-library/react';

import Prooducts from './prooducts';

describe('Prooducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Prooducts />);
    expect(baseElement).toBeTruthy();
  });
});
