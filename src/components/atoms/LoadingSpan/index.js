import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const LoadingSpan = () => {
  return <StyledSpan>Loading...</StyledSpan>;
};

export default LoadingSpan;
