import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100%;
  padding: 10px 0px;
  margin: 0 0 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Box = ({ className, children }) => {
  return <StyledBox className={className}>{children}</StyledBox>;
};

export default Box;
