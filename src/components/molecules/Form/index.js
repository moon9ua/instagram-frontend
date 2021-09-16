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

const Form = ({ inputInfo, btnName }) => {
  return (
    <StyledForm>
      {Object.entries(inputInfo).map((val, idx) => {
        const [name, placeholder] = val;
        return <Input {...{ name, placeholder }} key={idx} />;
      })}
      <Button>{btnName}</Button>
    </StyledForm>
  );
};

export default Form;
