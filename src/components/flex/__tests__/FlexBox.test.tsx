import { describe, it } from 'vitest';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { FlexBox } from 'components/flex';

describe('FlexBox', () => {
  it('should render the styled component correctly', () => {
    const tree = renderer.create(<FlexBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
