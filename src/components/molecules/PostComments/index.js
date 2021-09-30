import React from "react";
import styled from "styled-components";

const Comments = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 15px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const PostComments = ({ className, children }) => {
  return <Comments className={className}>{children}</Comments>;
};

export default PostComments;
