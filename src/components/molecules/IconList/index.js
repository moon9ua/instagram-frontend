import React from "react";
import styled from "styled-components";
import {
  faHome,
  faPaperPlane,
  faCompass,
  faHeart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../atoms/Icon";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -40px;
`;

const IconList = () => {
  return (
    <StyledUl>
      <Icon icon={faHome} name="home" />
      <Icon icon={faPaperPlane} name="dm" />
      <Icon icon={faCompass} name="explore" />
      <Icon icon={faHeart} name="feed" />
      <Icon icon={faUserCircle} name="my" />
    </StyledUl>
  );
};

export default IconList;
