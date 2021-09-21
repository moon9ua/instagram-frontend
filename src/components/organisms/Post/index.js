import React from "react";
import styled from "styled-components";
import WhiteInput from "../../molecules/WhiteForm";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";

const StyledDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin: 30px 0 0;
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* background-color: purple; */
  border-radius: 3px;
  /* align-items: center; */
`;

const Post = () => {
  return (
    <StyledDiv>
      <PostHeader
        username="username"
        src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg"
      />
      <img
        src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg"
        alt=""
      />
      <PostIcons />
      <PostComments />
      <WhiteInput />
    </StyledDiv>
  );
};

export default Post;
