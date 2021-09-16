import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  ${({ theme, size }) => `
      font-size: ${theme.fontSizes[size]};
    `}
  font-family: ${({ theme }) => theme.fonts.logo};
`;

function Logo({ size = "title" }) {
  return <StyledHeader size={size}>Instagram</StyledHeader>;
}

export default Logo;
