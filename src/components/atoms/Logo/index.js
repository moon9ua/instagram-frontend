import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.logo};
`;

function Logo({ className }) {
  return <StyledHeader className={className}>Instagram</StyledHeader>;
}

export default Logo;
