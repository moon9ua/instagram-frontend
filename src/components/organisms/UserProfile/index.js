import React from "react";
import { useSelector } from "react-redux";
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

const UserProfile = ({ error, info, onEdit, onFollow }) => {
  const { image, name, text, username } = info;

  return error ? (
    error
  ) : (
    <StyledDiv>
      {/* <RoundImg src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg" /> */}
      <RoundImg src={image} />
      <InfoContainer>
        <ProfileTitle {...{ username, onEdit, onFollow }} />
        <ProfileInfo />
        <ProfileContext name={name} context={text} />
      </InfoContainer>
    </StyledDiv>
  );
};

export default UserProfile;
