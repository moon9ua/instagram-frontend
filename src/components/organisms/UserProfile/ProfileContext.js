import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 16px;
`;

const ProfileContext = ({ name, context }) => {
  return (
    <div>
      <Name fontSize="16px">{name}</Name>
      <span>{context}</span>
    </div>
  );
};

export default ProfileContext;
