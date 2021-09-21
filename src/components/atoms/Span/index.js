import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color, theme }) => theme.colors[color]};
  /* 되나? */
`;

function Span({ children, ...rest }) {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
}

StyledSpan.defaultProps = {
  "font-size": "12px", // 필요한가?
  color: "#999999",
};

export default Span;
