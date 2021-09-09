import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0095f7;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 7px 10px;
  margin: 15px 0;
  width: 270px;
`;

function Button({ children }) {
  return <StyledButton className="button">{children}</StyledButton>;
}

export default Button;
