import React from "react";
import styled from "styled-components";
import RoundImg from "../../atoms/RoundImg";
import SpanError from "../../atoms/SpanError";
import ProfileContext from "./ProfileContext";
import ProfileInfo from "./ProfileInfo";
import ProfileTitle from "./ProfileTitle";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding: 50px 0;
  margin: 0 0 30px;
`;

const InfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
`;

const UserProfile = ({ error, profile, onClickEditBtn, onClickFollowBtn }) => {
  const { image, name, text, username, followers, followings, posts } = profile;

  return error ? (
    <SpanError>{error}</SpanError>
  ) : (
    <StyledDiv>
      <RoundImg src={image} />
      <InfoContainer>
        <ProfileTitle {...{ username, onClickEditBtn, onClickFollowBtn }} />
        <ProfileInfo {...{ posts, followers, followings }} />
        <ProfileContext name={name} context={text} />
      </InfoContainer>
    </StyledDiv>
  );
};

export default UserProfile;
