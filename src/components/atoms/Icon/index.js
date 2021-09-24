import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled.div`
  margin: 0 15px 0 5px;
  font-size: 20px;
`;

const Icon = ({ className, icon, name }) => {
  return (
    <StyledIcon>
      <FontAwesomeIcon className={className} icon={icon} name={name} />
    </StyledIcon>
  );
};

export default Icon;
