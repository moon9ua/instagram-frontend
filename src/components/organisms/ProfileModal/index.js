import React from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";
import Form from "../../molecules/Form";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  /* align-items: center; */
`;

const StyledBox = styled(Box)`
  z-index: 1;
  width: ${({ theme }) => theme.widths.loginBox};
  padding: 50px 50px 40px;
  margin: auto;
  border-radius: 5%;
`;

const ProfileModal = ({ onSubmitEdit, onExitEdit }) => {
  const inputInfo = {
    email: "이메일 주소",
    image: "프로필 사진",
    name: "이름",
    text: "소개",
  };

  return (
    <Container className="Container" onSubmit={onSubmitEdit} onClick={onExitEdit}>
      <StyledBox>
        <Form {...{ inputInfo, btnName: "프로필 수정" }} />
      </StyledBox>
    </Container>
  );
};

export default ProfileModal;
