import React, { useState } from "react";
import styled from "styled-components";
import Post from "../../molecules/Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowPosts = () => {
  const [state, setState] = useState({
    posts: [],
    loading: [],
  });

  return (
    <Container>
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default FollowPosts;
