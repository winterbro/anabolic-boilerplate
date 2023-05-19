import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { FlexContainer } from 'components/flex';

describe('FlexContainer', () => {
  it('should render the styled component correctly', () => {
    const tree = renderer.create(<FlexContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
