import React from "react";
import styled from "styled-components";
import UserProfile from "../../molecules/UserProfile";
import Thumbnails from "../../molecules/Thumbnails";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpan from "../../atoms/LoadingSpan";
import { getPosts } from "../../../modules/posts";

const StyledDiv = styled.div`
  max-width: 1000px;
  width: 80%;
`;

const UserPosts = (username) => {
  const { loading, posts } = useSelector((state) => state.posts);

  return (
    <StyledDiv>
      <UserProfile />
      {loading ? <LoadingSpan /> : <Thumbnails posts={posts} />}
    </StyledDiv>
  );
};

// <img src="https://pbs.twimg.com/media/Ek6vZPYUcAA2qPv.png" />;

export default UserPosts;
