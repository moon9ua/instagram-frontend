import React from "react";
import styled from "styled-components";
import LoginLowerBox from "../../molecules/LoginLowerBox";
import LoginUpperBox from "../../molecules/LoginUpperBox";

const StyledSignIn = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const SignIn = () => {
  return (
    <StyledSignIn>
      <LoginUpperBox inputList={["이메일", "비밀번호"]} btnText="로그인" />
      <LoginLowerBox firstText="계정이 없으신가요?" secondText="가입하기" link="/signup" />
    </StyledSignIn>
  );
};

export default SignIn;
