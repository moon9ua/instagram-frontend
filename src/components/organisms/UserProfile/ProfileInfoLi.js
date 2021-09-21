import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 0 30px 0 0;
  display: flex;
`;

const LiNum = styled.div`
  margin: 0 5px;
  font-weight: bold;
`;

const ProfileInfoLi = ({ name, num }) => {
  return (
    <StyledLi>
      <span>{name}</span>
      <LiNum>{num}</LiNum>
    </StyledLi>
  );
};

export default ProfileInfoLi;
