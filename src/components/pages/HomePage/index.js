import React from "react";
import { useSelector } from "react-redux";
import LoginedHome from "./LoginedHome";
import NotLoginedHome from "./NotLoginedHome";

const Home = () => {
  const session = useSelector((state) => state.session);

  return session.isLogined ? <LoginedHome /> : <NotLoginedHome />;
};

export default Home;
