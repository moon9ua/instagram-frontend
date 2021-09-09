import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../atoms/Box";

const StyledLoginLowerBox = styled.div`
  span {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 10px 0;
  }
`;

const LoginLowerBox = ({ firstText, secondText, link }) => {
  return (
    <StyledLoginLowerBox>
      <Box>
        <span>
          {firstText} <Link to={link}>{secondText}</Link>
        </span>
      </Box>
    </StyledLoginLowerBox>
  );
};

export default LoginLowerBox;
