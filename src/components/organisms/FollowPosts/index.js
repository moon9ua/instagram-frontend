import React from "react";
import styled from "styled-components";
import Post from "../Post";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowPosts = ({ posts }) => {
  return (
    <Container>
      {posts.map((val) => {
        return <Post key={val.id} username={val.username} img={val.images[0].url} id={val.id} />;
      })}
    </Container>
  );
};

export default FollowPosts;
