import React, { useEffect, useState } from "react";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import NavAndFooter from "../../templates/NavAndFooter";
import FollowPosts from "../../organisms/FollowPosts";
import { getFeedsAPI } from "../../../utils/API/postAPI";
import { useSelector } from "react-redux";
// import { followAPI, getFollowingsAPI } from "../../../utils/API";
// import { useSelector } from "react-redux";

const LoginedHome = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useSelector((state) => state.session);

  useEffect(() => {
    const doGetFeedsAPI = async (token) => {
      const feedPosts = await getFeedsAPI(token);
      setPosts(feedPosts);
    };

    doGetFeedsAPI(token);
  }, [token]);

  const FollowPostsProps = {
    posts,
  };

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<FollowPosts {...FollowPostsProps} />}
      footer={<Footer />}
    />
  );
};

export default LoginedHome;
