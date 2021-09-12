import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../organisms/Footer";
import SignIn from "../../organisms/SignIn";
import TmpOrg from "../../organisms/TmpOrg";
import HomeTemplate from "../../templates/HomeTemplate";

const Home = () => {
  const session = useSelector((state) => state.session);

  if (session.isLogined) {
    return <HomeTemplate context={<TmpOrg />} fotter={<Footer />} />;
  } else {
    return <HomeTemplate context={<SignIn />} footer={<Footer />} />;
  } // 내가 생각한 방법인데... 이게 맞을까? re-render에 대해 잘 몰라서 원리를 모르겠다.
};

export default Home;
