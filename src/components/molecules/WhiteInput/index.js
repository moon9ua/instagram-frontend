import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  height: 50px;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  input,
  input:focus,
  textarea:focus,
  *:focus {
    border: 0px;
    outline: none;
  }

  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
`;

const WhiteInput = ({ className, onPostComment }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer className={className}>
      <input onChange={onChange} value={value} />
      <strong
        onClick={() => {
          onPostComment(value);
          setValue("");
        }}
      >
        게시
      </strong>
    </InputContainer>
  );
};

export default WhiteInput;
