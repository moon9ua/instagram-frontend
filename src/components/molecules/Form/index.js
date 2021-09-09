import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0; */
`;

const Form = ({ placeholderArr, btnText }) => {
  return (
    <StyledForm>
      {placeholderArr.map((val, idx) => {
        return <Input placeholder={val} key={idx} />;
      })}
      <Button>{btnText}</Button>
    </StyledForm>
  );
};

export default Form;
