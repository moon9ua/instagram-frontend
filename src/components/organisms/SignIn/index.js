import React from "react";
import styled from "styled-components";

// 이거 다른 방법은 없나?
import Box from "../../atoms/Box";
import Logo from "../../atoms/Logo";
import Login from "../../molecules/Login";

const StyledSignIn = styled.div`
  width: 350px;
`;

// Link를 여기서 해줘도 되는지를 모르겠음... 전체적 설계를 어떻게 하지?

const SignIn = () => {
  return (
    <StyledSignIn>
      <Box>
        <Logo />
        <Login />
      </Box>
      <Box>
        계정이 없으신가요? <span>가입하기</span>
      </Box>
    </StyledSignIn>
  );
};

export default SignIn;
