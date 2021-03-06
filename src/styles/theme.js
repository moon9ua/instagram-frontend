const px = (size) => `${size}px`;

const fontSizes = {
  s: px(12),
  m: px(14),
  l: px(20),
  xl: px(30),
  navTitle: px(25),
  title: px(35),
};

const colors = {
  black: "#000000",
  white: "#ffffff",
  blue: "#0095f7",
  red: "#d84747",
  textGray: "#999999",
  backgroundGray: "#fafafa",
  borderGray: "#dbdbdb",
};

const fonts = {
  logo: "Satisfy",
};

const widths = {
  loginBox: px(350),
  maxWidth: px(1000),
};

const theme = {
  fontSizes,
  colors,
  fonts,
  widths,
};

export default theme;
