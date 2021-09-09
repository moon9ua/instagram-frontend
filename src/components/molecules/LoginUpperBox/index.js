import React from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import Form from "../Form";

const StyledLoginUpperBox = styled.div``;

const LoginUpperBox = ({ inputList, btnText }) => {
  return (
    <StyledLoginUpperBox>
      <Box>
        <Logo />
        <Form inputList={inputList} btnText={btnText} />
      </Box>
    </StyledLoginUpperBox>
  );
};

export default LoginUpperBox;
