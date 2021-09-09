import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 이거 다른 방법은 없나?
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";

const StyledSignUp = styled.div`
  width: 350px;
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <Box>
        <Logo />
        <Form placeholderArr={["이메일", "성명", "사용자 이름", "비밀번호"]} btnText="가입" />
      </Box>
      <Box>
        <div>
          계정이 있으신가요? <Link to="/">로그인</Link>
        </div>
      </Box>
    </StyledSignUp>
  );
};

export default SignUp;
