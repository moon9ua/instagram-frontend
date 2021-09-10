import React from "react";
import Footer from "../../organisms/Footer";
import SignIn from "../../organisms/SignIn";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  return <HomeTemplate context={<SignIn />} footer={<Footer />} />;
};

export default Home;
