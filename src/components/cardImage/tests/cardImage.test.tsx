import { render, fireEvent } from '@testing-library/react';

import { CardImage } from '../cardImage.component';

describe('[Component] Card Image', () => {
  it('should execute snapshot', () => {
    const id = '123123';
    const name = 'John Doe';
    const image = {
      src: 'htttp://image.pnge',
      alt: 'alt image',
    };
    const onClick = jest.fn();

    const { getByRole } = render(
      <CardImage id={id} onClick={onClick} image={image} name={name} />
    );
    const element = getByRole('contentinfo');

    expect(element).toMatchSnapshot();
  });

  it('should execute onClick when click an image', () => {
    const id = '123123';
    const name = 'John Doe';
    const image = {
      src: 'htttp://image.pnge',
      alt: 'alt image',
    };
    const onClick = jest.fn();

    const { getByRole } = render(
      <CardImage id={id} onClick={onClick} image={image} name={name} />
    );
    const element = getByRole('contentinfo');

    expect(element).toBeInTheDocument();

    fireEvent.click(element);

    expect(onClick).toBeCalled();
  });
});
