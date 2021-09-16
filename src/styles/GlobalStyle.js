import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    font-size: 15px;
  }

  *:visited {
    color: black;
  }

  a {
    color: black;
    text-decoration: none;
  }

`;

export default GlobalStyle;
