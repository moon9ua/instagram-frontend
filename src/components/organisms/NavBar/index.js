import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import IconList from "../../molecules/IconList";

const StyledNavBar = styled.nav`
  width: 100%;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavBarContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledNavBar>
        <Logo size="navTitle" />
        <Input themeName="inputForSearch" />
        <IconList />
      </StyledNavBar>
    </StyledNavBarContainer>
  );
};

export default NavBar;
