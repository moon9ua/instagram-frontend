import React from "react";
import styled from "styled-components";
import Span from "../../atoms/Span";

const StyledLi = styled.li`
  margin: 0 0 5px;
`;

const UserName = styled.strong`
  margin: 0 5px 0 0;
`;

const Comment = ({ username, context }) => {
  return (
    <StyledLi>
      <UserName>{username}</UserName>
      <Span>{context}</Span>
    </StyledLi>
  );
};

export default Comment;
