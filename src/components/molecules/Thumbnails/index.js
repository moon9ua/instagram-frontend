import React from "react";
import styled from "styled-components";
import Thumbnail from "../../atoms/Thumbnail";

const StyledDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 30px;
  /* background-color: yellow; */
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
