import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const Thumbnail = ({ className, id, src, onClick }) => {
  return (
    <StyledDiv>
      <StyledImg className={className} id={id} src={src} alt="" onClick={onClick} />
    </StyledDiv>
  );
};

export default Thumbnail;
