import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeError, signIn } from "../../../modules/session";
import Box from "../../atoms/Box";
import SpanError from "../../atoms/SpanError";
import SpanLoading from "../../atoms/SpanLoading";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";

const StyledDiv = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0;
`;

const LinkSpan = styled.span`
  color: ${({ theme }) => theme.colors.blue};
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
    <StyledDiv onSubmit={onSubmit}>
      {loading ? (
        <SpanLoading />
      ) : (
        <>
          <Box>
            <Logo />
            <Form {...FormProps} />
            {error ? <SpanError>{error}</SpanError> : null}
          </Box>
          <Box>
            <StyledSpan>
              계정이 없으신가요?{" "}
              <Link to="/accounts/signup" onClick={onClickLink}>
                <LinkSpan>가입하기</LinkSpan>
              </Link>
            </StyledSpan>
          </Box>
        </>
      )}
    </StyledDiv>
  );
};

export default SignIn;
