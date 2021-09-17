import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* div {
    background-color: gray;
    width: 100%;
    height: 100%;
  } */

  overflow: hidden;
  display: flex;
  /* width: 300px; */
  width: 100%;
  aspect-ratio: 1;
  /* height: 300px; */
  flex-flow: row wrap;
  justify-content: center;
  /* justify-content: flex-start; */
  align-items: center;
`;

const StyledImg = styled.img`
  /* width: 100%; */
  /* aspect-ratio: 1; */
  /* object-fit: cover; */
`;

const Thumbnail = ({ className, id, src }) => {
  return (
    <StyledDiv>
      {/* <div></div> */}
      <StyledImg className={className} id={id} src={src} alt="" />
    </StyledDiv>
  );
};

export default Thumbnail;
