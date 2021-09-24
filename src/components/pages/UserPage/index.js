import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTargetUser from "../../../hooks/useTargetUser";
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
  const { username: myUsername } = useSelector((state) => state.session.user);

  const targetUser = useTargetUser();
  const [profile, profileError, setProfile] = useUserProfile(targetUser);
  const [posts, postError] = useUserPosts(targetUser);
  const [editOpen, setEditOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [postComments, setPostComments] = useState([]);

  const UserPostsProps = {
    error: postError,
    editOpen,
    postOpen,
  };

  const UserProfileProps = {
    error: profileError,
    profile,
    onClickEditBtn: () => {
      setEditOpen(true);
    },
    onClickFollowBtn: (e) => {
      console.log(e);
    },
  };

  const ProfileModalProps = {
    onSubmit: (e) => {
      e.preventDefault();
      const newProfile = {
        username: myUsername,
        email: e.target.email.value,
        image: e.target.image.value,
        name: e.target.name.value,
        text: e.target.text.value,
      };
      dispatch(edit(myUsername, newProfile));
      setProfile(newProfile);
      setEditOpen(false);
    },
    onClickOutside: (e) => {
      if (e.target.className.includes("Container")) {
        setEditOpen(false);
      }
    },
  };

  const ThumbnailsProps = {
    posts,
    onClickThumbnail: async (e) => {
      const comments = await getCommentOfPostAPI(e.target.id);
      setPostComments(comments);
      setPostOpen(posts.find((val) => val.id === parseInt(e.target.id)));
    },
  };

  const PostModalProps = {
    profile,
    postOpen,
    postComments,
    onClickOutside: (e) => {
      if (e.target.tagName !== "DIV") return;
      if (e.target.className.includes("Container")) {
        setPostOpen(false);
      }
    },
    onCreateComment: async (value) => {
      await createCommentAPI({
        nested: false,
        parentId: null,
        postId: postOpen.id,
        text: value,
        username: myUsername,
      });
      setPostComments(await getCommentOfPostAPI(postOpen.id));
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
