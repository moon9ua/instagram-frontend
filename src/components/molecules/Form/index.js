import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = ({ inputList, btnText }) => {
  return (
    <StyledForm>
      {inputList.map((val, idx) => {
        return <Input placeholder={val} key={idx} />;
      })}
      <Button>{btnText}</Button>
    </StyledForm>
  );
};

export default Form;
