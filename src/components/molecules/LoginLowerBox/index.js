import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../atoms/Box";

const StyledLoginLowerBox = styled.div``;

const LoginLowerBox = ({ firstText, secondText, link }) => {
  return (
    <StyledLoginLowerBox>
      <Box>
        <div>
          <span>
            {firstText} <Link to={link}>{secondText}</Link>
          </span>
        </div>
      </Box>
    </StyledLoginLowerBox>
  );
};

export default LoginLowerBox;
