import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { endLoading, startLoading } from "../../../modules/loading";
import { getPostsAPI, getUserAPI } from "../../../utils/API";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const useUserPosts = (username, setUsername) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setUsername(pathname.substr(1));
  }, [pathname, setUsername]);

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

  return [error, posts];
};

const useUserProfile = (username, setUsername) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.session);

  const [error, setError] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    setUsername(pathname.substr(1));
  }, [pathname, setUsername]);

  useEffect(() => {
    const doGetUserAPI = async (username) => {
      // console.log("useEffect...", `[${username}] [${user.username}]`);

      dispatch(startLoading());
      setError("");
      try {
        const info = user.username === username ? { ...user } : await getUserAPI(username);
        dispatch(endLoading());
        setError("");
        setInfo({ ...info });
      } catch (e) {
        dispatch(endLoading());
        setError(e.message);
      }
    };

    if (username) doGetUserAPI(username); // 진짜 잘 모르겠다..!!! 이렇게 쓰면 안될 것 같은데...
  }, [username, dispatch, user]);

  return [error, info, setInfo];
};

const UserPage = () => {
  const [username, setUsername] = useState(null);
  const [postError, posts] = useUserPosts(username, setUsername);
  const [profileError, info, setInfo] = useUserProfile(username, setUsername);

  const UserPostsProps = {
    error: postError,
    posts,
  };

  const UserProfileProps = {
    error: profileError,
    info,
    onEdit: () => {
      console.log("haha");
    },
    onFollow: () => {
      console.log("I want follow!");
    },
  };

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<UserPosts {...{ UserPostsProps, UserProfileProps }} />}
      footer={<Footer />}
    />
  );
};

export default UserPage;
