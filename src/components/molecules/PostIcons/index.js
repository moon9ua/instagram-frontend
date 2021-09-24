import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import { faPaperPlane, faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px 10px;
`;

const ThreeIcons = styled.div`
  display: flex;
`;

const PostIcons = ({ className }) => {
  return (
    <Icons className={className}>
      <ThreeIcons>
        <Icon icon={faHeart} />
        <Icon icon={faComment} />
        <Icon icon={faPaperPlane} />
      </ThreeIcons>
      <Icon icon={faBookmark} />
    </Icons>
  );
};

export default PostIcons;
