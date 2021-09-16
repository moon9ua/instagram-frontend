import React from "react";
import styled from "styled-components";
import Thumbnail from "../../atoms/Thumbnail";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledThumbnail = styled(Thumbnail)`
  position: relative;
  margin: 1rem;
  width: 150px;
  height: 150px;
`;

const Thumbnails = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((val) => {
        return <StyledThumbnail key={val.id} src={val.images[0].url} />;
      })}
      {/* <Thumbnail src="https://pbs.twimg.com/media/Ek6vZPYUcAA2qPv.png" />
      <Thumbnail src="https://pbs.twimg.com/media/Ek6vZPYUcAA2qPv.png" />
      <Thumbnail src="https://pbs.twimg.com/media/Ek6vZPYUcAA2qPv.png" />
      <Thumbnail src="https://pbs.twimg.com/media/Ek6vZPYUcAA2qPv.png" /> */}
    </StyledDiv>
  );
};

export default Thumbnails;
