import React from "react";
import styled from "styled-components";
import RoundImg from "../../atoms/RoundImg";

const StyledRoundImg = styled(RoundImg)`
  width: 30px;
  height: 30px;
  margin: 13px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const PostHeader = ({ className, username, src }) => {
  return (
    <Header className={className}>
      <StyledRoundImg src={src} />
      <strong>{username}</strong>
    </Header>
  );
};

export default PostHeader;
