import { render } from '@testing-library/react';

import { Input } from '../input.component';

describe('List Characters screen', () => {
  it('should execute snapshot', () => {
    const { getByRole } = render(<Input />);
    const element = getByRole('textbox');
    // debug();
    expect(element).toMatchSnapshot();
  });
});
