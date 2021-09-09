import React from "react";
import styled from "styled-components";
import Span from "../../atoms/Span";

const StyledFooter = styled.footer`
  margin: 50px 0;
  span {
    padding: 0px 7px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Span>Info</Span>
      <Span>Contact</Span>
      <Span>이것저것... 근데 쓸 말이 없다...</Span>
    </StyledFooter>
  );
}

export default Footer;
