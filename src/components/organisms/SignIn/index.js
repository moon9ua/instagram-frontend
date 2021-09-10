import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signUpAsync } from "../../../modules/session";
import LoginLowerBox from "../../molecules/LoginLowerBox";
import LoginUpperBox from "../../molecules/LoginUpperBox";

const StyledSignIn = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const SignIn = () => {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const onSubmit = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(user);
    // console.log(dispatch);
    // dispatch(signUpAsync(userInfo));
  };

  return (
    <StyledSignIn onSubmit={onSubmit}>
      <LoginUpperBox inputList={["사용자 이름", "비밀번호"]} btnText="로그인" onSubmit={onSubmit} />
      <LoginLowerBox firstText="계정이 없으신가요?" secondText="가입하기" link="/signup" />
    </StyledSignIn>
  );
};

export default SignIn;
