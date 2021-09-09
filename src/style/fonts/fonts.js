import { createGlobalStyle } from "styled-components";
import Satisfy from "./Satisfy-Regular.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Satisfy";
    src: local("Satisfy"),
    url(${Satisfy}) format('woff');
  }
`;

export default GlobalFonts;
