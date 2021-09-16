import React from "react";
import styled from "styled-components";
import Post from "../../molecules/Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowPosts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default FollowPosts;
