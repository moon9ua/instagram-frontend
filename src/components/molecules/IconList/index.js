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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -40px;
`;

const IconList = () => {
  const {
    user: { username },
  } = useSelector((state) => state.session);

  return (
    <StyledUl>
      <Link to="/">
        <Icon icon={faHome} name="home" />
      </Link>
      <Link to="/itsTest!">
        <Icon icon={faPaperPlane} name="dm" />
      </Link>
      <Icon icon={faCompass} name="explore" />
      <Icon icon={faHeart} name="feed" />
      <Link to={`/${username}`}>
        <Icon icon={faUserCircle} name="my" />
      </Link>
    </StyledUl>
  );
};

export default IconList;
