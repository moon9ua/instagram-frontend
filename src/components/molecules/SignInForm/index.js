import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const StyledSignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignInForm = () => {
  return (
    <StyledSignInForm>
      <Input placeholder="사용자 이름" name="username" />
      <Input placeholder="비밀번호" name="password" />
      <Button>로그인</Button>
    </StyledSignInForm>
  );
};

// username: 사용자 이름 ... 이런걸 어딘가에 저장해놓고 싶은데...
// 지금은 내코가석자라 그렇게 깔끔한것까지 신경쓸수가 없다.

export default SignInForm;
