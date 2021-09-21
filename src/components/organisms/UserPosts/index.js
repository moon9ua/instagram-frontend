import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserProfile from "../UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import SpanLoading from "../../atoms/SpanLoading";
// import PostModal from "../PostModal";
import { getPostsAPI } from "../../../utils/API";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../../../modules/loading";
import PostModal from "../PostModal";
import { useLocation } from "react-router";

const StyledDiv = styled.div`
  width: 1000px;
  /* min-height: 100vh; */
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 20px;
`;

const UserPosts = ({ error, setError, posts, setPosts }) => {
  const loading = useSelector((state) => state.loading);

  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = (e) => {
  //   console.log(e.target.id);
  //   setModalOpen(true); // 그냥 반대로 해줘야 하나?
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <StyledDiv>
      {loading ? (
        <SpanLoading />
      ) : (
        <>
          <UserProfile />
          {/* {error ? <span>{error}</span> : <Thumbnails posts={posts} onClick={openModal} />} */}
          {error ? <span>{error}</span> : <Thumbnails posts={posts} />}
          {/* <PostModal isOpen={modalOpen} close={closeModal} /> */}
        </>
      )}
    </StyledDiv>
  );
};

export default UserPosts;
