import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  /* width: 100vw; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: yellow; */

  .context {
    width: 100%;
    /* background-color: yellow; */
  }
`;

const NavAndFooter = ({ nav, context, footer }) => {
  return (
    <StyledDiv>
      {nav}
      <div className="context">{context}</div>
      {footer}
    </StyledDiv>
  );
};

export default NavAndFooter;
