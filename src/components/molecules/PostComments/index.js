import React from "react";
import styled from "styled-components";
import Comment from "../../molecules/Comment";

const Comments = styled.ul`
  /* background-color: yellow; */
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 15px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const PostComments = ({ className, children }) => {
  return (
    <Comments className={className}>
      {children}
      {/* <Comment username="moongua" context="hahaha" /> */}
      {/* <Comment username="seo" context="wow" /> */}
      {/* <Comment username="kim" context="대박!!" /> */}
      {/* <Comment>
        <UserName>moongua</UserName>
        <Text>hahaha</Text>
      </Comment>
      <Comment>
        <UserName>seo</UserName>
        <Text>우와</Text>
      </Comment>
      <Comment>
        <UserName>kim</UserName>
        <Text>^^7</Text>
      </Comment> */}
    </Comments>
  );
};

export default PostComments;
