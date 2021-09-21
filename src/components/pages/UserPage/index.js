import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { endLoading, startLoading } from "../../../modules/loading";
import { getPostsAPI } from "../../../utils/API";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = () => {
  const { pathname } = useLocation();
  const username = pathname.substr(1);

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const doGetPostsAPI = async (username) => {
      dispatch(startLoading());
      setError("");
      try {
        const posts = await getPostsAPI(username);
        dispatch(endLoading());
        setError("");
        setPosts([...posts]);
      } catch (e) {
        dispatch(endLoading());
        setError(e.message);
      }
    };

    doGetPostsAPI(username);
  }, [username, dispatch]);

  const UserPostsProps = {
    error,
    setError,
    posts,
    setPosts,
  };

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<UserPosts {...UserPostsProps} />}
      footer={<Footer />}
    />
  );
};

export default UserPage;
