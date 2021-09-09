import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

function Logo() {
  return <StyledLogo>Instagram</StyledLogo>;
}

export default Logo;
