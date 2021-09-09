import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SignUpPage from "./components/pages/SignUpPage";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/signup" exact component={SignUpPage} />
    </HashRouter>
  );
}

export default App;
