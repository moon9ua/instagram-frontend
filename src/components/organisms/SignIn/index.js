import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../atoms/Box";
import SpanError from "../../atoms/SpanError";
import SpanLoading from "../../atoms/SpanLoading";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";
import Span from "../../atoms/Span";

const StyledDiv = styled.div`
  width: ${({ theme }) => theme.widths.loginBox};
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0;
`;

const SignIn = ({ onSubmit, onClickLink, FormProps }) => {
  const { loading, error } = useSelector((state) => state.session);

  return loading ? (
    <SpanLoading />
  ) : (
    <StyledDiv onSubmit={onSubmit}>
      <Box>
        <Logo />
        <Form {...FormProps} />
        {error ? <SpanError>{error}</SpanError> : null}
      </Box>
      <Box>
        <StyledSpan>
          계정이 없으신가요?{" "}
          <Link
            // to={{ pathname: "/accounts/signup", state: { ...signUpProps } }}
            to="/accounts/signup"
            onClick={onClickLink}
          >
            <Span fontSize="14px" color="blue">
              가입하기
            </Span>
          </Link>
        </StyledSpan>
      </Box>
    </StyledDiv>
  );
};

export default SignIn;
