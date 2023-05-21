import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import GlobalStyle from 'layout/GlobalStyle';

describe('GlobalStyle', () => {
  it('should have global style', () => {
    renderer.create(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
