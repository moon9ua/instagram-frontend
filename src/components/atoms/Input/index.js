import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 10px;
  margin: 5px 0 0 0;
`;

const Input = ({ placeholder }) => {
  return <StyledInput className="input" placeholder={placeholder}></StyledInput>;
};

export default Input;
