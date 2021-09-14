import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeSignUp, signUpAsync } from "../../../modules/session";
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import SignUpForm from "../../molecules/SignUpForm";

const StyledSignUp = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeSignUp(name, value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAsync(session.signUpForm));
  };

  return (
    <StyledSignUp onSubmit={onSubmit}>
      <Box>
        <Logo />
        <SignUpForm onChange={onChange} />
      </Box>
      <Box>
        <StyledSpan>
          계정이 있으신가요? <Link to="/">로그인</Link>
        </StyledSpan>
      </Box>
    </StyledSignUp>
  );
};

/*
 <StyledSignUp onSubmit={onSubmit}>
      <LoginUpperBox
        inputList={["이메일 주소", "성명", "사용자 이름", "비밀번호"]}
        btnText="가입"
        onSubmit={onSubmit}
      />
      <LoginLowerBox firstText="계정이 있으신가요?" secondText="로그인" link="/" />
*/
export default SignUp;
