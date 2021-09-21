import React from "react";
import styled from "styled-components";
import RoundImg from "../../atoms/RoundImg";
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

const UserProfile = () => {
  return (
    <StyledDiv>
      <RoundImg src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg" />
      <InfoContainer>
        <ProfileTitle />
        <ProfileInfo />
        <ProfileContext name="이름" context="유저 소개 내용입니다... 하하 ^^7" />
      </InfoContainer>
    </StyledDiv>
  );
};

export default UserProfile;
