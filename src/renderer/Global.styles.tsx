import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url("../../assets/fonts/Roboto-Black.ttf") format('truetype'), url("../../assets/fonts/Roboto-BlackItalic.ttf") format('truetype'), url("../../assets/fonts/Roboto-Bold.ttf") format('truetype'), url("../../assets/fonts/Roboto-BoldItalic.ttf") format('truetype'), url("../../assets/fonts/Roboto-Italic.ttf") format('truetype'), url("../../assets/fonts/Roboto-Light.ttf") format('truetype'), url("../../assets/fonts/Roboto-LightItalic.ttf") format('truetype'), url("../../assets/fonts/Roboto-Medium.ttf") format('truetype'), url("../../assets/fonts/Roboto-MediumItalic.ttf") format('truetype'), url("../../assets/fonts/Roboto-Regular.ttf") format('truetype'), url("../../assets/fonts/Roboto-Thin.ttf") format('truetype'), url("../../assets/fonts/Roboto-ThinItalic.ttf") format('truetype');
  }

  :root {
      --font-color: rgb(209, 209, 209);
      --font-color-accent: rgb(255, 255, 255);
      --bg-color: #181818;
  }

  [data-theme="light"] {
      --font-color: #e1e1ff;
      --font-color-accent: rgb(209, 209, 209);
      --bg-color: #161625;
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
