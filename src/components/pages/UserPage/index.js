import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTargetName from "../../../hooks/useTargetName";
import useUserPosts from "../../../hooks/useUserPosts";
import useUserProfile from "../../../hooks/useUserProfile";
import { edit } from "../../../modules/session";
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
  const [postError, posts, editOpen, setEditOpen] = useUserPosts(targetName);
  const [profileError, info, setInfo] = useUserProfile(targetName);

  const UserPostsProps = {
    error: postError,
    posts,
    editOpen,

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

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<UserPosts {...{ UserPostsProps, UserProfileProps, ProfileModalProps }} />}
      footer={<Footer />}
    />
  );
};

export default UserPage;
