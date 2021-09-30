import React from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";
import WhiteInput from "../../molecules/WhiteInput";
import PostComments from "../../molecules/PostComments";
import PostHeader from "../../molecules/PostHeader";
import PostIcons from "../../molecules/PostIcons";
import Comment from "../../molecules/Comment";

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
  width: 1000px;
  margin: auto;
  height: 600px;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const StyledImg = styled.img`
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  background-color: purple;
`;

const CommentBox = styled.div`
  width: 100%;
  /* border: 1px solid ${({ theme }) => theme.colors.borderGray}; */
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* align-items: center; */
  justify-content: space-evenly;
  height: 100%;
`;

const StyledPostHeader = styled(PostHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const StyledPostIcons = styled(PostIcons)``;

const StyledWhiteInput = styled(WhiteInput)`
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledPostComments = styled(PostComments)`
  height: 100%;
  padding: 15px;
`;

const PostModal = ({
  profile,
  postOpen,
  postComments,
  onClickOutside,
  onPostComment,
}) => {
  // const { id, username, text, views, images } = postOpen;
  const { username, text, images } = postOpen;

  return (
    <Container className="Container" onClick={onClickOutside}>
      <StyledBox>
        <StyledImg src={images[0].url} />
        <CommentBox>
          <StyledPostHeader username={username} src={profile.image} />
          <StyledPostComments>
            {text ? <Comment username={username} context={text} /> : null}
            {postComments.map((val) => {
              return (
                <Comment
                  key={val.id}
                  username={val.username}
                  context={val.text}
                />
              );
            })}
          </StyledPostComments>
          <StyledPostIcons />
          <StyledWhiteInput onPostComment={onPostComment} />
        </CommentBox>
      </StyledBox>
    </Container>
  );
};

export default PostModal;
