import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="sign-up">
      <main className="sign-up__main">
        <div className="sign-up__sign-in">
          <div className="sign-up__logo">Instagram</div>
          <input className="sign-up__id" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input className="sign-up__password" placeholder="비밀번호"></input>
          <button className="sign-up__login-button">로그인</button>
        </div>
        <div className="sign-up__login">
          계정이 있으신가요? <Link to="/">로그인</Link>
        </div>
      </main>
      <footer className="sign-up__footer">
        <div>소개 블로그 어쩌고...</div>
      </footer>
    </div>
  );
}

export default SignUp;
