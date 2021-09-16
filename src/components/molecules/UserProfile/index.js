import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding: 50px 0;
  margin: 0 0 30px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 30px;
`;

const UserName = styled.span`
  font-size: 30px;
`;

const StyledButton = styled(Button)`
  width: 90px;
  margin: 0 20px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const InfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 30px;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li`
  margin: 0 30px 0 0;
  display: flex;
`;

const LiNum = styled.li`
  margin: 0 5px;
  font-weight: bold;
`;

const Name = styled.h1`
  font-size: 16px;
`;

const UserProfile = () => {
  return (
    <StyledDiv>
      <StyledImg src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg" />
      <InfoContainer>
        <RowContainer>
          <UserName>username</UserName>
          <StyledButton>팔로우</StyledButton>
        </RowContainer>
        <StyledUl>
          <StyledLi>
            <span>게시물</span>
            <LiNum>1294</LiNum>
          </StyledLi>
          <StyledLi>
            <span>팔로워</span>
            <LiNum>17000</LiNum>
          </StyledLi>
          <StyledLi>
            <span>팔로우</span>
            <LiNum>60</LiNum>
          </StyledLi>
        </StyledUl>
        <div>
          <Name>이름</Name>
          <span>유저 소개 내용입니다... 하하 ^^7</span>
        </div>
      </InfoContainer>
    </StyledDiv>
  );
};

export default UserProfile;
