import React, { useState } from "react";
import styled from "styled-components";
import UserProfile from "../../molecules/UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import { useSelector } from "react-redux";
import SpanLoading from "../../atoms/SpanLoading";
import PostModal from "../PostModal";

const StyledDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 0 20px;
`;

const UserPosts = (username) => {
  const { loading, posts } = useSelector((state) => state.posts);

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
          <Thumbnails posts={posts} onClick={openModal} />
          <PostModal isOpen={modalOpen} close={closeModal} />
        </>
      )}
    </StyledDiv>
  );
};

export default UserPosts;
