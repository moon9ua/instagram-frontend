import React from "react";
import styled from "styled-components";
import ProfileInfoLi from "./ProfileInfoLi";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ProfileInfo = () => {
  return (
    <StyledUl>
      <ProfileInfoLi name="게시물" num="1294" />
      <ProfileInfoLi name="팔로워" num="17000" />
      <ProfileInfoLi name="팔로우" num="60" />
    </StyledUl>
  );
};

export default ProfileInfo;
