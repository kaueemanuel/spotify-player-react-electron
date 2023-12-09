import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
      --font-color: #9D9D9D;
      --font-color-accent: #DEDEDE;
      --bg-color: #181818;
      --bg-color-secondary: #292929;
  }

  [data-theme="light"] {
      --font-color: #e1e1ff;
      --font-color-accent: rgb(209, 209, 209);
      --bg-color: #161625;
      --bg-color-secondary: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--bg-color);
    width: 428px;
    height: 557px;
    overflow: hidden;
    color: var(--font-color);
    position: relative;
    font-family: 'Roboto';
    font-size: 12px;
  }

  #root {
    width: 428px;
    height: 557px;
  }

  a {
    text-decoration: none;
    font-family: Roboto;
    color: var(--bg-color);
    font-weight: 500;
  }

  button {
    color: var(--bg-color);
    cursor: pointer;
    border: none;
    background-color: var(--font-color-accent);
    padding: 10px;
    font-size: 16px;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    padding: 10px 16px;
    transition: ease-in 0.1s;
    border-radius: 6px;
  }
`;

export default GlobalStyle;
