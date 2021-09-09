import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

function Span({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}

export default Span;
