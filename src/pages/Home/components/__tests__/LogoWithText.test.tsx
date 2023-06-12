import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { LogoWithText, StyledLogo } from 'pages/Home/components/LogoWithText';
import viteLogo from 'assets/vite.svg';

describe('LogoWithText', () => {
  it('should render a logo with text', () => {
    render(
      <LogoWithText
        linkSrc="https://vite.dev"
        imageSrc={viteLogo}
        text="Vite"
      />
    );
    const logo = screen.getByRole('img');
    const logoText = screen.getByText('Vite');
    expect(logo).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });
});

describe('StyledLogo', () => {
  it('should render the styled component correctly', () => {
    const tree = renderer.create(<StyledLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
