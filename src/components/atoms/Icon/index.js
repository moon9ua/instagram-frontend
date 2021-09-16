import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled.div`
  margin: 0 15px 0 0;
  font-size: 20px;
`;

const Icon = ({ icon, name }) => {
  return (
    <StyledIcon>
      <FontAwesomeIcon icon={icon} name={name} />
    </StyledIcon>
  );
};

export default Icon;
