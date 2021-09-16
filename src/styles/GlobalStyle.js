import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  *:visited {
    color: black;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
