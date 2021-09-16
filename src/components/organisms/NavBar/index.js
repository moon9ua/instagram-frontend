import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import IconList from "../../molecules/IconList";

const StyledNav = styled.nav`
  width: 100%;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledInput = styled(Input)`
  width: 200px;
  padding: 5px 0;
  margin: 0 10px;
`;

const NavBar = () => {
  return (
    <StyledDiv>
      <StyledNav>
        <Link to="/">
          <Logo size="navTitle" />
        </Link>
        <StyledInput />
        <IconList />
      </StyledNav>
    </StyledDiv>
  );
};

export default NavBar;
