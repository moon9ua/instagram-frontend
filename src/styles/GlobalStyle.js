import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    font-size: 16px;
    overflow-y: scroll;
  }

  *:visited {
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
