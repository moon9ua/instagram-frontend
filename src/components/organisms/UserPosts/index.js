import React from "react";
import styled from "styled-components";
import UserProfile from "../UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import SpanLoading from "../../atoms/SpanLoading";
// import PostModal from "../PostModal";
import { useSelector } from "react-redux";
import ProfileModal from "../ProfileModal";

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

const UserPosts = ({ UserPostsProps, UserProfileProps, ProfileModalProps }) => {
  const { error, posts, editOpen } = UserPostsProps;

  const loading = useSelector((state) => state.loading);

  return loading ? (
    <SpanLoading />
  ) : (
    <StyledDiv>
      <UserProfile {...UserProfileProps} />
      {/* {error ? <span>{error}</span> : <Thumbnails posts={posts} onClick={openModal} />} */}
      {error ? <span>{error}</span> : <Thumbnails posts={posts} />}
      {/* <PostModal isOpen={modalOpen} close={closeModal} /> */}
      {editOpen ? <ProfileModal {...ProfileModalProps} /> : null}
    </StyledDiv>
  );
};

export default UserPosts;
