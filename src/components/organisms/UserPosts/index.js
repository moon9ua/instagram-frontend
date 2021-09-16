import React from "react";
import styled from "styled-components";
import UserProfile from "../../molecules/UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import { useSelector } from "react-redux";
import SpanLoading from "../../atoms/SpanLoading";

const StyledDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 15px;
`;

const UserPosts = (username) => {
  const { loading, posts } = useSelector((state) => state.posts);

  return (
    <StyledDiv>
      <UserProfile />
      {loading ? <SpanLoading /> : <Thumbnails posts={posts} />}
    </StyledDiv>
  );
};

export default UserPosts;
