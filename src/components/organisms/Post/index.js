import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WhiteInput from "../../molecules/WhiteInput";
import PostComments from "../../molecules/PostComments";
import PostHeader from "../../molecules/PostHeader";
import PostIcons from "../../molecules/PostIcons";
import Comment from "../../molecules/Comment";
import {
  createCommentAPI,
  getCommentOfPostAPI,
  getUserAPI,
} from "../../../utils/API";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin: 30px 0 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* background-color: purple; */
  border-radius: 3px;
  /* align-items: center; */
`;

const Styledimg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const Post = ({ username, img, id }) => {
  const {
    token,
    user: { username: myUsername },
  } = useSelector((state) => state.session);

  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const doGetUserAPI = async (target) => {
      const userInfo = await getUserAPI(target);
      setUser(userInfo);
    };

    doGetUserAPI(username);
  }, [username]);

  useEffect(() => {
    const doGetCommentOfPostAPI = async (postId) => {
      const response = await getCommentOfPostAPI(postId);
      setComments(response);
    };

    doGetCommentOfPostAPI(id);
  }, [id]);

  const onPostComment = async (value) => {
    await createCommentAPI(
      {
        nested: false,
        parentId: null,
        postId: id,
        text: value,
        username: myUsername,
      },
      token
    );

    setComments(await getCommentOfPostAPI(id));
  };

  return (
    <StyledDiv>
      <PostHeader username={username} src={user.images} />
      <Styledimg src={img} alt="" />
      <PostIcons />
      <PostComments>
        {comments.map((val) => {
          return (
            <Comment key={val.id} username={val.username} context={val.text} />
          );
        })}
      </PostComments>
      <WhiteInput onPostComment={onPostComment} />
    </StyledDiv>
  );
};

export default Post;
