import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 270px;
  padding: 10px;
  margin: 3px 0;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 3px;
  box-sizing: border-box;
`;

const Input = ({ placeholder }) => {
  return <StyledInput className="input" placeholder={placeholder}></StyledInput>;
};

export default Input;
