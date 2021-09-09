import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  padding: 10px 0px;
  margin: 0 0 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Box = ({ children }) => {
  // return <div className="box">{content}</div>;
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
