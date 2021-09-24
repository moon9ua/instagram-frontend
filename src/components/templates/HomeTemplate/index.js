import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .context {
    margin: auto;
  }
`;

// 여기서는 이런 식으로 만드는걸까? page와 template의 차이를 명확히 모르겠다.
const HomeTemplate = ({ context, footer }) => {
  return (
    <StyledDiv>
      <div className="context">{context}</div>
      {footer}
    </StyledDiv>
  );
};

export default HomeTemplate;
