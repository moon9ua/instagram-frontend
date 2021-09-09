const px = (size) => `${size}px`;

const fontSizes = {
  s: px(12),
  m: px(14),
  l: px(15),
  xl: px(20),
  title: px(35),
};

const colors = {
  black: "#000000",
  white: "#ffffff",
  blue: "#0095f7",
  textGray: "#999999",
  backgroundGray: "#fafafa",
  borderGray: "#dbdbdb",
};

const fonts = {
  logo: "Satisfy",
};

const widths = {
  loginBox: px(350),
};

const theme = {
  fontSizes,
  colors,
  fonts,
  widths,
};

export default theme;
