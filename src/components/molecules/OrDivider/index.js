import React from "react";
import styled from "styled-components";

const StyledOrDivider = styled.div`
  .separator {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .separator::before,
  .separator::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #000;
  }

  span {
    margin: 0 15px;
  }
`;

const OrDivider = () => {
  return (
    <StyledOrDivider>
      <div className="separator">
        <span>또는</span>
      </div>
    </StyledOrDivider>
  );
};

export default OrDivider;

// 대충 구현만 해놓고 사용은 안함. 실제로 사용하려면 색이건 뭐건 바꿔야... 근데 아마 사용하지 않을 것 같다.
// 추후에 삭제하자.
