import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const StyledSignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = ({ onChange }) => {
  return (
    <StyledSignUpForm>
      <Input placeholder="이메일 주소" name="email" onChange={onChange} />
      <Input placeholder="성명" name="name" onChange={onChange} />
      <Input placeholder="사용자 이름" name="username" onChange={onChange} />
      <Input placeholder="비밀번호" name="password" onChange={onChange} />
      <Button>가입</Button>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
