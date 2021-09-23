import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../atoms/Button";
import Span from "../../atoms/Span";

const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 90px;
  margin: 0 20px;
`;

const ProfileTitle = ({ username, setEditOpen, onClickFollowBtn }) => {
  const { username: myUsername } = useSelector((state) => state.session.user);

  return (
    <RowContainer>
      <Span fontSize="30px" color="black">
        {username}
      </Span>
      {username === myUsername ? (
        <StyledButton
          onClick={() => {
            setEditOpen(true);
          }}
        >
          프로필 편집
        </StyledButton>
      ) : (
        <StyledButton
          onFollow={() => {
            console.log("!!!");
          }}
        >
          팔로우
        </StyledButton>
      )}
    </RowContainer>
  );
};

export default ProfileTitle;
