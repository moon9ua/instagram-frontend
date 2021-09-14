import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signInAsync } from "../../../modules/session";
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

const ErrorSpan = styled.span``;

const SignIn = () => {
  const dispatch = useDispatch();
  // const session = useSelector((state) => state.session);

  const [errMsg, setErrMsg] = useState("");

  const errorSpan = () => {
    return errMsg ? <ErrorSpan>{errMsg}</ErrorSpan> : null;
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 이걸 안하면 주소에 query(맞나?)가 붙어버린다!

    dispatch(
      signInAsync({
        username: e.target[0].value,
        password: e.target[1].value,
      })
    );
  };

  return (
    <StyledSignIn onSubmit={onSubmit}>
      <Box>
        <Logo />
        <SignInForm />
        {errorSpan()}
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
