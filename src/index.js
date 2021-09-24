import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import App from "./App";
import rootReducer from "./modules";
import GlobalFonts from "./styles/GlobalFonts";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
