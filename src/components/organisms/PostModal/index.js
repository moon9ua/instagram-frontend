import React from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
`;

const StyledBox = styled(Box)`
  width: 900px;
  margin: auto;
  height: 600px;
  background-color: yellow;
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

const PostModal = ({ onExitPost }) => {
  return (
    <Container className="Container" onClick={onExitPost}>
      <StyledBox>
        <StyledImg src="https://pbs.twimg.com/media/Etdkb65VcAISs8w.jpg" />
        <CommentContainer>
          <NameBox></NameBox>
          <CommentBox></CommentBox>
          <IconBox></IconBox>
          <InputBox></InputBox>
        </CommentContainer>
      </StyledBox>
    </Container>
  );
};

export default PostModal;
