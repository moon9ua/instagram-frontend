import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeError, signUp } from "../../../modules/session";
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";
import SignUpForm from "../../molecules/SignUpForm";

const StyledSignUp = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0;
`;

const ErrorSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.red};
  margin: 10px 0;
`;

const LoadingSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.session);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      signUp({
        email: e.target.email.value,
        name: e.target.name.value,
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
      email: "이메일 주소",
      name: "성명",
      username: "사용자 이름",
      password: "비밀번호",
    },
    btnName: "로그인",
  };

  return (
    <StyledSignUp onSubmit={onSubmit}>
      {loading ? (
        <LoadingSpan>Loading...</LoadingSpan>
      ) : (
        <>
          <Box>
            <Logo />
            <Form {...FormProps} />
            {error ? <ErrorSpan>{error}</ErrorSpan> : null}
          </Box>
          <Box>
            <StyledSpan>
              계정이 있으신가요?{" "}
              <Link to="/" onClick={onClickLink}>
                로그인
              </Link>
            </StyledSpan>
          </Box>
        </>
      )}
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
