import React from "react";
import styled from "styled-components";

const StyledHomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

// 여기서는 이런 식으로 만드는걸까? page와 template의 차이를 명확히 모르겠다.
const HomeTemplate = ({ context, footer }) => {
  return (
    <StyledHomeTemplate>
      {context}
      {footer}
    </StyledHomeTemplate>
  );
};

export default HomeTemplate;
