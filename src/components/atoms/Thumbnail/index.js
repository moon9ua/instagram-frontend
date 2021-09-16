import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  background: #000;
`;

const StyledImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Thumbnail = ({ className, id, src }) => {
  return (
    <StyledDiv>
      <StyledImg className={className} id={id} src={src} alt="" />
    </StyledDiv>
  );
};

export default Thumbnail;
