import React from "react";
import { useDispatch } from "react-redux";
import { removeError, signUp } from "../../../modules/session";
import Footer from "../../organisms/Footer";
import SignUp from "../../organisms/SignUp";
import HomeTemplate from "../../templates/HomeTemplate";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const signUpProps = {
    onSubmit: (e) => {
      e.preventDefault();
      dispatch(
        signUp({
          email: e.target.email.value,
          name: e.target.name.value,
          username: e.target.username.value,
          password: e.target.password.value,
        })
      );
    },

    onClickLink: () => {
      dispatch(removeError());
    },

    FormProps: {
      inputInfo: {
        email: "이메일 주소",
        name: "성명",
        username: "사용자 이름",
        password: "비밀번호",
      },
      btnName: "가입",
    },
  };

  return <HomeTemplate context={<SignUp {...signUpProps} />} footer={<Footer />} />;
};

export default SignUpPage;
