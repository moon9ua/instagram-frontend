import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <main className="home__main">
        <div className="home__sign-in">
          <div className="home__logo">Instagram</div>
          <input className="home__id" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input className="home__password" placeholder="비밀번호"></input>
          <button className="home__login-button">로그인</button>
        </div>
        <div className="home__sign-up">
          계정이 없으신가요? <Link to="/signup">가입하기</Link>
        </div>
      </main>
      <footer className="home__footer">
        <div>소개 블로그 어쩌고...</div>
      </footer>
    </div>
  );
}

export default Home;
