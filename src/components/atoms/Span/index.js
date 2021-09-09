import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: #999999;
  font-size: 13px;
`;

function Span({ children }) {
  return <StyledSpan>{children}</StyledSpan>;
}

export default Span;
