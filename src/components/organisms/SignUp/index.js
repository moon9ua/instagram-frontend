import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signUpAsync } from "../../../modules/session";
import LoginLowerBox from "../../molecules/LoginLowerBox";
import LoginUpperBox from "../../molecules/LoginUpperBox";

const StyledSignUp = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const SignUp = () => {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const onSubmit = (userInfo) => {
    // console.log(text);
    // console.log(userInfo);
    // console.log(user);
    // console.log(dispatch);
    // dispatch(signUpAsync(userInfo));
  };

  return (
    <StyledSignUp onSubmit={onSubmit}>
      <LoginUpperBox
        inputList={["이메일 주소", "성명", "사용자 이름", "비밀번호"]}
        btnText="가입"
        onSubmit={onSubmit}
      />
      <LoginLowerBox firstText="계정이 있으신가요?" secondText="로그인" link="/" />
    </StyledSignUp>
  );
};

export default SignUp;
