import React from "react";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = (props) => {
  // console.log("userpage");

  // 이것도 useEffect로?
  // useEffect(() => {
  //   //
  // },[props.location.pathname]);

  const username = props.location.pathname.substr(1); // ❓ 아 모르겠다... 작동 원리를 모르겠다. route와 component의... 작동은 되는데 이게 좋은 방법일까?

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<UserPosts username={username} />}
      footer={<Footer />}
    />
  );
};

export default UserPage;
