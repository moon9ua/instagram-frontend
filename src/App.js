import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HomePage from "./components/pages/HomePage";
import SignUpPage from "./components/pages/SignUpPage";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    background-color: #fafafa;
  }
`;

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Route path="/" exact component={HomePage} />
      <Route path="/signup" exact component={SignUpPage} />
    </HashRouter>
  );
}

export default App;
