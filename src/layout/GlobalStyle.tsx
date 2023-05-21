import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --sizing-unit: 8px;
    --space-xs: var(--sizing-unit);
    --space-sm: calc(2 * var(--sizing-unit));
    --space-md: calc(3 * var(--sizing-unit));
    --space-lg: calc(4 * var(--sizing-unit));
    --space-xl: calc(6 * var(--sizing-unit));
    --font-family: "Lato", sans-serif;
    --font-size: calc(2 * var(--sizing-unit));
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-family: var(--font-family);
    font-size: var(--font-size);
  }

  body {
    color: #fff;
    background: #242424;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
