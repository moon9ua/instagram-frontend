import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../organisms/Footer";
import SignIn from "../../organisms/SignIn";
import TmpOrg from "../../organisms/TmpOrg";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  const session = useSelector((state) => state.session);

  return session.isLogined ? (
    <HomeTemplate context={<TmpOrg />} footer={<Footer />} />
  ) : (
    <HomeTemplate context={<SignIn />} footer={<Footer />} />
  );
};

export default Home;
