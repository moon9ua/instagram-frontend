import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  ${({ theme, size }) => {
    return `
      font-size: ${theme[size]};
    `;
  }}
  font-family: ${({ theme }) => theme.fonts.logo};
`;

function Logo({ size = "title" }) {
  return <StyledLogo size={size}>Instagram</StyledLogo>;
}

export default Logo;
