import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";

import { faPaperPlane, faHeart, faComment, faBookmark } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  margin: 30px 0 0;
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  /* background-color: purple; */
  border-radius: 3px;
  /* align-items: center; */
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 13px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px 10px;
`;

const ThreeIcons = styled.div`
  display: flex;
`;

const Comments = styled.ul`
  /* background-color: yellow; */
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 15px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

const Comment = styled.li`
  margin: 0 0 5px;
`;

const UserName = styled.strong`
  margin: 0 5px 0 0;
`;
const Text = styled.span``;

const InputContainer = styled.div`
  height: 50px;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  input,
  input:focus,
  textarea:focus,
  *:focus {
    border: 0px;
    outline: none;
  }

  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Post = () => {
  return (
    <StyledDiv>
      <Header>
        <ProfileImg src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg" />
        <strong>username</strong>
      </Header>
      <img src="https://pbs.twimg.com/profile_images/1400720202396930048/v81b6I-j_400x400.jpg" />
      <Icons>
        <ThreeIcons>
          <Icon icon={faHeart} />
          <Icon icon={faComment} />
          <Icon icon={faPaperPlane} />
        </ThreeIcons>
        <Icon icon={faBookmark} />
      </Icons>
      <Comments>
        <Comment>
          <UserName>moongua</UserName>
          <Text>hahaha</Text>
        </Comment>
        <Comment>
          <UserName>seo</UserName>
          <Text>우와</Text>
        </Comment>
        <Comment>
          <UserName>kim</UserName>
          <Text>^^7</Text>
        </Comment>
      </Comments>
      <InputContainer>
        <input />
        <strong>게시</strong>
      </InputContainer>
    </StyledDiv>
  );
};

export default Post;
