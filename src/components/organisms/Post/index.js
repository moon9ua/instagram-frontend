import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WhiteInput from "../../molecules/WhiteInput";
import PostComments from "../../molecules/PostComments";
import PostHeader from "../../molecules/PostHeader";
import PostIcons from "../../molecules/PostIcons";
import Comment from "../../molecules/Comment";
import { createCommentAPI, getCommentOfPostAPI, getUserAPI } from "../../../utils/API";
import { useSelector } from "react-redux";

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

  img {
    border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

const Post = ({ username, img, id }) => {
  const { username: myUsername } = useSelector((state) => state.session.user);

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
    await createCommentAPI({
      nested: false,
      parentId: null,
      postId: id,
      text: value,
      username: myUsername,
    });

    setComments(await getCommentOfPostAPI(id));
  };

  return (
    <StyledDiv>
      <PostHeader username={username} src={user.images} />
      <img src={img} alt="" />
      <PostIcons />
      <PostComments>
        {comments.map((val) => {
          return <Comment username={val.username} context={val.text} />;
        })}
      </PostComments>
      <WhiteInput onPostComment={onPostComment} />
    </StyledDiv>
  );
};

export default Post;
