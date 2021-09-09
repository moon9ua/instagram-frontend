import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalFonts from "./style/fonts/fonts";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
