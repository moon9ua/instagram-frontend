import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color, theme }) => theme.colors[color]};
  /* 되나? */
`;

function Span({ className, children, fontSize, color }) {
  return (
    <StyledSpan className={className} fontSize={fontSize} color={color}>
      {children}
    </StyledSpan>
  );
}

StyledSpan.defaultProps = {
  fontSize: "12px",
  color: "textGray",
};

export default Span;
