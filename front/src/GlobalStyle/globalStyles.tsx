import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .App{
    display: flex;
    height: 100vh;
  }
`;
 
export default GlobalStyle;