import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserProfile from "../../molecules/UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import { useSelector } from "react-redux";
import SpanLoading from "../../atoms/SpanLoading";
import PostModal from "../PostModal";
import { getPostsAPI } from "../../../utils/API";

const StyledDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 20px;
`;

const UserPosts = ({ username }) => {
  // const { loading, posts } = useSelector((state) => state.posts);
  // console.log("haha"); // 왜 2,3번씩 출력?

  const [state, setState] = useState({
    // username: "",
    posts: [],
    loading: false,
    error: "",
  });

  useEffect(() => {
    const doGetPostsAPI = async (username) => {
      setState((state) => ({
        ...state,
        loading: true,
        error: "",
      }));
      try {
        const posts = await getPostsAPI(username);
        setState((state) => ({
          ...state,
          posts,
          loading: false,
          error: "",
        }));
      } catch (e) {
        setState((state) => ({
          ...state,
          loading: false,
          error: e.message,
        }));
      }
    };

    doGetPostsAPI(username);
  }, [username]);

  const { loading, posts, error } = state; // 이렇게?

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    console.log(e.target.id);
    setModalOpen(true); // 그냥 반대로 해줘야 하나?
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledDiv>
      {loading ? (
        <SpanLoading />
      ) : (
        <>
          <UserProfile />
          {error ? <span>{error}</span> : <Thumbnails posts={posts} onClick={openModal} />}
          {/* <PostModal isOpen={modalOpen} close={closeModal} /> */}
        </>
      )}
    </StyledDiv>
  );
};

export default UserPosts;
