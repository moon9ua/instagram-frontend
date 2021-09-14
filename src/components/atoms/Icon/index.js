import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled.div`
  padding: 0 5px;
`;

const Icon = ({ icon, name }) => {
  return (
    <StyledIcon>
      <FontAwesomeIcon icon={icon} name={name} />
    </StyledIcon>
  );
};

export default Icon;
