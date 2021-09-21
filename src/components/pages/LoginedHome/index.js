import React from "react";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import NavAndFooter from "../../templates/NavAndFooter";
import FollowPosts from "../../organisms/FollowPosts";

const LoginedHome = () => {
  return <NavAndFooter nav={<NavBar />} context={<FollowPosts />} footer={<Footer />} />;
};

export default LoginedHome;
