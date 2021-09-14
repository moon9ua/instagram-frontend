const px = (size) => `${size}px`;

const fontSizes = {
  s: px(12),
  m: px(14),
  l: px(20),
  xl: px(30),
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
};

const inputForHome = {
  width: px(270),
  "background-color": colors.backgroundGray,
  padding: px(10),
  "border-color": colors.borderGray,
};

const inputForSearch = {
  width: px(200),
  "background-color": colors.white,
  padding: "5px 0",
  "border-color": colors.borderGray,
};

const theme = {
  fontSizes,
  colors,
  fonts,
  widths,
  inputForHome,
  inputForSearch,
};

export default theme;
