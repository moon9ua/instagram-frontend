import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 이거 다른 방법은 없나?
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import Form from "../../molecules/Form";

const StyledSignIn = styled.div`
  width: 350px;
`;

// Link를 여기서 해줘도 되는지를 모르겠음... 전체적 설계를 어떻게 하지?

const SignIn = () => {
  return (
    <StyledSignIn>
      <Box>
        <Logo />
        <Form placeholderArr={["이메일", "비밀번호"]} btnText="로그인" />
      </Box>
      <Box>
        <div>
          계정이 없으신가요? <Link to="/signup">가입하기</Link>
        </div>
      </Box>
    </StyledSignIn>
  );
};

export default SignIn;
