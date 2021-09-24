import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTargetName from "../../../hooks/useTargetName";
import useUserPosts from "../../../hooks/useUserPosts";
import useUserProfile from "../../../hooks/useUserProfile";
import { edit } from "../../../modules/session";
import { createCommentAPI, getCommentOfPostAPI } from "../../../utils/API";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = () => {
  const dispatch = useDispatch();
  const {
    user: { username },
  } = useSelector((state) => state.session);

  const targetName = useTargetName();
  const [profileError, info] = useUserProfile(targetName);
  const [postError, posts] = useUserPosts(targetName);
  const [editOpen, setEditOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [postComments, setPostComments] = useState([]);

  const UserPostsProps = {
    error: postError,
    editOpen,
    postOpen,

    onClickFollowBtn: () => {
      console.log("I want follow!");
    },
  };

  const UserProfileProps = {
    error: profileError,
    info,
    setEditOpen,
  };

  const ProfileModalProps = {
    onSubmitEdit: (e) => {
      e.preventDefault();
      dispatch(
        edit(username, {
          username,
          email: e.target.email.value,
          image: e.target.image.value,
          name: e.target.name.value,
          text: e.target.text.value,
        })
      );
      setEditOpen(false);
    },
    onExitEdit: (e) => {
      if (e.target.className.includes("Container")) {
        setEditOpen(false);
      }
    },
  };

  const ThumbnailsProps = {
    posts,
    onClickPost: async (e) => {
      const comments = await getCommentOfPostAPI(e.target.id);
      setPostComments(comments);
      setPostOpen(posts.find((val) => val.id === parseInt(e.target.id)));
    },
    // setPostOpen,
  };

  const PostModalProps = {
    postOpen,
    onExitPost: (e) => {
      if (e.target.tagName !== "DIV") return;
      if (e.target.className.includes("Container")) {
        setPostOpen(false);
      }
    },
    postComments,
    onPostComment: async (value) => {
      await createCommentAPI({
        nested: false,
        parentId: null,
        postId: postOpen.id,
        text: value,
        username: username,
      });
      const comments = await getCommentOfPostAPI(postOpen.id);
      setPostComments(comments);
    },
  };

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={
        <UserPosts
          {...{
            UserPostsProps,
            UserProfileProps,
            ProfileModalProps,
            ThumbnailsProps,
            PostModalProps,
          }}
        />
      }
      footer={<Footer />}
    />
  );
};

export default UserPage;
