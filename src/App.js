import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SignUpPage from "./components/pages/SignUpPage";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/:user" exact component={UserPage} />
    </HashRouter>
  );
}

export default App;
