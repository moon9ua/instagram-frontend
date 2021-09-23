import React, { useState } from "react";
import useTargetName from "../../../hooks/useTargetName";
import useUserPosts from "../../../hooks/useUserPosts";
import useUserProfile from "../../../hooks/useUserProfile";
import Footer from "../../organisms/Footer";
import NavBar from "../../organisms/NavBar";
import UserPosts from "../../organisms/UserPosts";
import NavAndFooter from "../../templates/NavAndFooter";

const UserPage = () => {
  const targetName = useTargetName();
  const [postError, posts] = useUserPosts(targetName);
  const [profileError, info, setInfo] = useUserProfile(targetName);

  const UserPostsProps = {
    error: postError,
    posts,
  };

  const UserProfileProps = {
    error: profileError,
    info,
    onEdit: () => {
      console.log("haha");
    },
    onFollow: () => {
      console.log("I want follow!");
    },
  };

  const ProfileModalProps = {};

  return (
    <NavAndFooter
      nav={<NavBar />}
      context={<UserPosts {...{ UserPostsProps, UserProfileProps }} />}
      footer={<Footer />}
    />
  );
};

export default UserPage;
