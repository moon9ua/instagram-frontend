import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.red};
  margin: 10px 0;
`;

const ErrorSpan = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default ErrorSpan;
