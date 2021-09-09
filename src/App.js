import React from "react";
// import { HashRouter, Route } from "react-router-dom";
import SignIn from "./components/organisms/SignIn";
// import Home from "./components/pages/Home/Home";
// import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    // <HashRouter>
    //   <Route path="/" exact={true} component={Home} />
    //   <Route path="/signup" exact={true} component={SignUp} />
    // </HashRouter>

    <SignIn />
  );
}

export default App;
