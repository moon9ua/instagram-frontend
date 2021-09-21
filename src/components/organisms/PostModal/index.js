import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* width: 900px; */
  /* 폭이 고정이 아니라 사진 따라 달라짐... ㅠㅠ */
  height: 600px;
  background-color: yellow;
  display: flex;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const CommentContainer = styled.div`
  width: 350px;
  height: 100%;
  background-color: green;
`;

const NameBox = styled.div``;
const CommentBox = styled.div``;
const IconBox = styled.div``;
const InputBox = styled.div``;

const PostModal = ({ isOpen, close }) => {
  return (
    <StyledDiv>
      <StyledImg src="https://pbs.twimg.com/media/Etdkb65VcAISs8w.jpg" />
      <CommentContainer>
        <NameBox></NameBox>
        <CommentBox></CommentBox>
        <IconBox></IconBox>
        <InputBox></InputBox>
      </CommentContainer>
    </StyledDiv>
  );
};

export default PostModal;
