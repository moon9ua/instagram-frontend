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

const CommentBox = styled.div`
  width: 350px;
  height: 100%;
  background-color: green;
`;

const PostModal = ({ isOpen, close }) => {
  return (
    <StyledDiv>
      {/* <StyledImg src="https://pbs.twimg.com/profile_images/958665763623092224/ZGABTe51.jpg" /> */}
      <StyledImg src="https://pbs.twimg.com/media/Etdkb65VcAISs8w.jpg" />
      <CommentBox />
    </StyledDiv>
  );
};

export default PostModal;
