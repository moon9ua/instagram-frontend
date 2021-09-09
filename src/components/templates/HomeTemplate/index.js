import React from "react";
import styled from "styled-components";

const StyledHomeTemplate = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .context {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

// 여기서는 이런 식으로 만드는걸까? page와 template의 차이를 명확히 모르겠다.
const HomeTemplate = ({ context, footer }) => {
  return (
    <StyledHomeTemplate>
      <div className="context">{context}</div>
      {footer}
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
