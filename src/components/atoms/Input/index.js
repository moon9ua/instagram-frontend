import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 270px;
  padding: 10px;
  margin: 3px 0;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 3px;
  box-sizing: border-box;
`;

const Input = ({ placeholder, name }) => {
  // const Input = ({ placeholder, name }) => {
  // const [input, setInput] = useState("");

  // const onChange = (e) => {
  //   // console.log(e.value, e.name);
  //   console.log(e.target.value, e.target.name);
  // };

  return <StyledInput placeholder={placeholder} name={name}></StyledInput>;
  // return <StyledInput placeholder={placeholder} name={name}></StyledInput>;
};

export default Input;
