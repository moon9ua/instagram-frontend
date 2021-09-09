import React from "react";
import Footer from "../../organisms/Footer";
import SignUp from "../../organisms/SignUp";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  return <HomeTemplate context={<SignUp />} footer={<Footer />}></HomeTemplate>;
};

export default Home;
