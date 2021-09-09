import React from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import "./style.css";

const Login = () => {
  return (
    <div>
      <Box
        content={
          <div>
            <Logo />
            <Input placeholder="이메일" />
            <Input placeholder="비밀번호" />
            <Button text="로그인" />
          </div>
        }
      />
    </div>
  );
};

export default Login;
