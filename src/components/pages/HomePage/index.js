import React from "react";
import { useSelector } from "react-redux";
import LoginedHome from "../LoginedHome";
import SignInPage from "../SignInPage";

const Home = () => {
  const { isLogined } = useSelector((state) => state.session);

  return isLogined ? <LoginedHome /> : <SignInPage />;
};

export default Home;
