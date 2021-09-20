import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  aspect-ratio: 1;
  overflow: hidden;

  /*
  aspect-ratio: 1;
  overflow: hidden;
  width: 100%;
  margin: auto;
  object-fit: cover;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  */
`;

const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

const Thumbnail = ({ className, id, src, onClick }) => {
  return (
    <StyledDiv>
      {/* <div></div> */}
      <StyledImg className={className} id={id} src={src} alt="" onClick={onClick} />
    </StyledDiv>
  );
};

export default Thumbnail;
