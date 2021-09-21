import React from "react";
import { useDispatch } from "react-redux";
import { removeError, signIn, signUp } from "../../../modules/session";
import Footer from "../../organisms/Footer";
import SignIn from "../../organisms/SignIn";
import HomeTemplate from "../../templates/HomeTemplate";

const NotLoginedHome = () => {
  const dispatch = useDispatch();

  const signInProps = {
    onSubmit: (e) => {
      e.preventDefault(); // 이걸 안하면 주소에 query(맞나?)가 붙어버린다!
      dispatch(
        signIn({
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
        username: "사용자 이름",
        password: "비밀번호",
      },
      btnName: "로그인",
    },
  };

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

  return (
    <HomeTemplate context={<SignIn {...{ signInProps, signUpProps }} />} footer={<Footer />} />
  );
};

export default NotLoginedHome;
