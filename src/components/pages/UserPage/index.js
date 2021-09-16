import React from "react";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = () => {
  return <NavAndFooter nav={<NavBar />} context={<UserPosts />} footer={<Footer />} />;
};

export default UserPage;
