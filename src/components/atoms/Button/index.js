import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 270px;
  padding: 7px 10px;
  margin: 15px 0;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

function Button({ children }) {
  return <StyledButton className="button">{children}</StyledButton>;
}

export default Button;
