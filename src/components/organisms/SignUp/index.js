import React from "react";
import styled from "styled-components";
import LoginLowerBox from "../../molecules/LoginLowerBox";
import LoginUpperBox from "../../molecules/LoginUpperBox";

const StyledSignUp = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <LoginUpperBox
        inputList={["이메일 주소", "성명", "사용자 이름", "비밀번호"]}
        btnText="가입"
      />
      <LoginLowerBox firstText="계정이 있으신가요?" secondText="로그인" link="/" />
    </StyledSignUp>
  );
};

export default SignUp;
