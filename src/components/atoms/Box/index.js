import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  padding: 30px;
  margin: 10px;
`;

const Box = ({ children }) => {
  // return <div className="box">{content}</div>;
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
