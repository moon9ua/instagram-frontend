import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import IconList from "../../molecules/IconList";

const StyledDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledNav = styled.nav`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: blue; */
`;

const StyledInput = styled(Input)`
  width: 200px;
  padding: 5px 0;
`;

const StyledLogo = styled(Logo)`
  margin: 0 15px;
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
`;

const NavBar = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <Link to="/">
          <StyledLogo size="navTitle" />
        </Link>
        <StyledInput />
        <IconList />
      </StyledNav>
    </StyledDiv>
  );
};

export default NavBar;
