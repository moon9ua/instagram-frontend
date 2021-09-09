import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0095f7;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 7px;
  margin: 15px 0 0 0;
  /* width: 100%; */
`;

function Button({ children }) {
  return <StyledButton className="button">{children}</StyledButton>;
}

export default Button;
