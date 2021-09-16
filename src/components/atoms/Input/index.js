import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 270px;
  padding: 10px;
  margin: 3px 0;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 3px;
  box-sizing: border-box;
`;

const Input = ({ className, placeholder, name }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      className={className}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};

export default Input;
