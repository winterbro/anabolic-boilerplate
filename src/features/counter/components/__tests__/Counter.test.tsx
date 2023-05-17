import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Counter, StyledCounter } from 'features/counter';
import { Provider } from 'react-redux';
import { store } from 'store';

// Testing page headline
describe('Counter', () => {
  it('should render a counter with the value 0', () => {
    render(
      <Provider store={store}>
        <Counter />)
      </Provider>
    );
    const counter = screen.getByRole('button');
    expect(counter).toHaveTextContent('count is 0');
  });

  it('should increment the counter when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Counter />)
      </Provider>
    );
    const counter = screen.getByRole('button');
    await user.click(counter);
    await user.click(counter);
    await user.click(counter);
    expect(counter).toHaveTextContent('count is 3');
  });
});

describe('StyledCounter', () => {
  it('should render the styled component correctly', () => {
    const tree = renderer.create(<StyledCounter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
