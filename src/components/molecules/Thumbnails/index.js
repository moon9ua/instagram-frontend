import React from "react";
import styled from "styled-components";
import Thumbnail from "../../atoms/Thumbnail";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  gap: 20px;

  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; */
`;

const Thumbnails = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((val) => {
        return <Thumbnail key={val.id} src={val.images[0].url} />;
      })}
    </StyledDiv>
  );
};

export default Thumbnails;
