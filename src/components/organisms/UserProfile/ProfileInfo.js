import React from "react";
import styled from "styled-components";
import ProfileInfoLi from "./ProfileInfoLi";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ProfileInfo = ({ posts, followers, followings }) => {
  return (
    <StyledUl>
      <ProfileInfoLi name="게시물" num={posts} />
      <ProfileInfoLi name="팔로워" num={followers} />
      <ProfileInfoLi name="팔로우" num={followings} />
    </StyledUl>
  );
};

export default ProfileInfo;
