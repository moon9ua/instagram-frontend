import React from "react";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = () => {
  return <NavAndFooter nav={<NavBar />} footer={<Footer />} />;
};

export default UserPage;
