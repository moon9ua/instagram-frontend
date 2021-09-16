import React from "react";
import { useSelector } from "react-redux";
import FollowPosts from "../../organisms/FollowPosts";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import SignIn from "../../organisms/SignIn";
import HomeTemplate from "../../templates/HomeTemplate";
import NavAndFooter from "../../templates/NavAndFooter";

const Home = () => {
  const session = useSelector((state) => state.session);

  return session.isLogined ? (
    <NavAndFooter nav={<NavBar />} context={<FollowPosts />} footer={<Footer />} />
  ) : (
    <HomeTemplate context={<SignIn />} footer={<Footer />} />
  );
};

export default Home;
