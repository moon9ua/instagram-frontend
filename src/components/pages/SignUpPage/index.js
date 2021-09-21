import React from "react";
import Footer from "../../organisms/Footer";
import SignUp from "../../organisms/SignUp";
import HomeTemplate from "../../templates/HomeTemplate";

const SignUpPage = () => {
  return <HomeTemplate context={<SignUp />} footer={<Footer />} />;
};

export default SignUpPage;
