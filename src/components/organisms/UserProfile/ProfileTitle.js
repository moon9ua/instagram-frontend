import React from "react";
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

const ProfileTitle = () => {
  return (
    <RowContainer>
      <Span fontSize="30px" color="black">
        username
      </Span>
      <StyledButton>팔로우</StyledButton>
    </RowContainer>
  );
};

export default ProfileTitle;
