import React from "react";
import styled from "styled-components";
import Box from "../../atoms/Box";

const Container = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
`;

const ProfileModal = ({ visible }) => {
  return (
    <Container visible={visible}>
      <Box>haha</Box>
    </Container>
  );
};

export default ProfileModal;
