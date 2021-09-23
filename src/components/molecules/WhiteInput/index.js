import React from "react";
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
  }
`;

const WhiteInput = ({ className }) => {
  return (
    <InputContainer className={className}>
      <input />
      <strong>게시</strong>
    </InputContainer>
  );
};

export default WhiteInput;
