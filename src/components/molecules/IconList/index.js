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
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../modules/posts";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin-left: -40px;
`;

const IconList = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.session);

  const onClick = () => {
    dispatch(getPosts(username));
  };

  return (
    <StyledUl>
      <Link to="/">
        <Icon icon={faHome} name="home" />
      </Link>
      <Icon icon={faPaperPlane} name="dm" />
      <Icon icon={faCompass} name="explore" />
      <Icon icon={faHeart} name="feed" />
      <Link to={`/${username}`} onClick={onClick}>
        <Icon icon={faUserCircle} name="my" />
      </Link>
    </StyledUl>
  );
};

export default IconList;
