import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { endLoading, startLoading } from "../modules/loading";
import { getPostsAPI } from "../utils/API";

const useUserPosts = (targetName) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const doGetPostsAPI = async (targetName) => {
      dispatch(startLoading());
      setError("");
      try {
        const posts = await getPostsAPI(targetName);
        dispatch(endLoading());
        setError("");
        setPosts([...posts]);
      } catch (e) {
        dispatch(endLoading());
        setError(e.message);
      }
    };

    if (targetName) doGetPostsAPI(targetName);
  }, [targetName, dispatch]);

  return [error, posts];
};

export default useUserPosts;
