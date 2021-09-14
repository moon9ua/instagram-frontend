import React from "react";
import styled from "styled-components";

const StyledNavAndFooter = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NavAndFooter = ({ nav, context, footer }) => {
  return (
    <StyledNavAndFooter>
      {nav}
      {context}
      {footer}
    </StyledNavAndFooter>
  );
};

export default NavAndFooter;
