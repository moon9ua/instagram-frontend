import React from "react";
import styled from "styled-components";
import UserProfile from "../UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import SpanLoading from "../../atoms/SpanLoading";
// import PostModal from "../PostModal";
import { useSelector } from "react-redux";
import ProfileModal from "../ProfileModal";
import PostModal from "../PostModal";

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

const UserPosts = ({
  UserPostsProps,
  UserProfileProps,
  ProfileModalProps,
  ThumbnailsProps,
  PostModalProps,
}) => {
  const { error, editOpen, postOpen } = UserPostsProps;

  const loading = useSelector((state) => state.loading);

  return loading ? (
    <SpanLoading />
  ) : (
    <StyledDiv>
      <UserProfile {...UserProfileProps} />
      {error ? <span>{error}</span> : <Thumbnails {...ThumbnailsProps} />}
      {editOpen ? <ProfileModal {...ProfileModalProps} /> : null}
      {postOpen ? <PostModal {...PostModalProps} /> : null}
    </StyledDiv>
  );
};

export default UserPosts;
