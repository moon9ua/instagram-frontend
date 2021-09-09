import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 10px;
  margin: 3px 0;
  width: 270px;
  box-sizing: border-box;
`;

const Input = ({ placeholder }) => {
  return <StyledInput className="input" placeholder={placeholder}></StyledInput>;
};

export default Input;
