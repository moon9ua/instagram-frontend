import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeError, signIn } from "../../../modules/session";
import Box from "../../atoms/Box";
import ErrorSpan from "../../atoms/ErrorSpan";
import LoadingSpan from "../../atoms/LoadingSpan";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";
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
  const { loading, error } = useSelector((state) => state.session);

  const onSubmit = (e) => {
    e.preventDefault(); // 이걸 안하면 주소에 query(맞나?)가 붙어버린다!

    dispatch(
      signIn({
        username: e.target.username.value,
        password: e.target.password.value,
      })
    );
  };

  const onClickLink = () => {
    dispatch(removeError());
  };

  const FormProps = {
    inputInfo: {
      username: "사용자 이름",
      password: "비밀번호",
    },
    btnName: "로그인",
  };

  return (
    <StyledSignIn onSubmit={onSubmit}>
      {loading ? (
        <LoadingSpan />
      ) : (
        <>
          <Box>
            <Logo />
            <Form {...FormProps} />
            {error ? <ErrorSpan>{error}</ErrorSpan> : null}
          </Box>
          <Box>
            <StyledSpan>
              계정이 없으신가요?{" "}
              <Link to="/accounts/signup" onClick={onClickLink}>
                가입하기
              </Link>
            </StyledSpan>
          </Box>
        </>
      )}
    </StyledSignIn>
  );
};

export default SignIn;
