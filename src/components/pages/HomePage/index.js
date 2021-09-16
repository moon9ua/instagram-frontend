import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import SignIn from "../../organisms/SignIn";
import HomeTemplate from "../../templates/HomeTemplate";
import NavAndFooter from "../../templates/NavAndFooter";

const Home = () => {
  const session = useSelector((state) => state.session);

  return session.isLogined ? (
    <NavAndFooter
      nav={<NavBar />}
      context={<span>팔로우 한 사람들 posts...?</span>}
      footer={<Footer />}
    />
  ) : (
    <HomeTemplate context={<SignIn />} footer={<Footer />} />
  );
};

export default Home;
