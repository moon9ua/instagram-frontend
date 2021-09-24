import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 30px;
`;

const RoundImg = ({ className, src }) => {
  return <StyledImg className={className} src={src} />;
};

export default RoundImg;
