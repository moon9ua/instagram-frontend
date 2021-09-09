import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  span {
    padding: 0px 5px;
  }
  padding: 10px;
`;

function Footer() {
  return (
    <StyledFooter>
      <span>Info</span>
      <span>Contact</span>
      <span>이것저것... 근데 쓸 말이 없다...</span>
    </StyledFooter>
  );
}

export default Footer;
