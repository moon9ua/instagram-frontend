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
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
  // return <StyledInput placeholder={placeholder} name={name}></StyledInput>;
};

export default Input;
