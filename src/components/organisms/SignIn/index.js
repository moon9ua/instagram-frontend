import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeSignIn, signIn, signInAsync, signUp } from "../../../modules/session";
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import SignInForm from "../../molecules/SignInForm";

const StyledSignIn = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeSignIn(name, value));
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 이걸 안하면 주소에 query(맞나?)가 붙어버린다!
    dispatch(signInAsync(session.signInForm));
  };

  return (
    <StyledSignIn onSubmit={onSubmit}>
      <Box>
        <Logo />
        <SignInForm onChange={onChange} />
      </Box>
      <Box>
        <StyledSpan>
          계정이 없으신가요? <Link to="/signup">가입하기</Link>
        </StyledSpan>
      </Box>
    </StyledSignIn>
  );
};

export default SignIn;
