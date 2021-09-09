import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Login = () => {
  return (
    <StyledLogin>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
      <Button>로그인</Button>
    </StyledLogin>
  );
};

export default Login;
