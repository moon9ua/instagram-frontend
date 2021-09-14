import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Logo from "../../atoms/Logo";
import IconList from "../../molecules/IconList";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const StyledSearch = styled.div`
//   /* width: 180px; */
// `;

// const Search = () => {
//   return (
//     <StyledSearch>
//       <input />
//     </StyledSearch>
//   );
// };

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      {/* <Search /> */}
      <Input themeName="inputForSearch" />
      <IconList />
    </StyledNavBar>
  );
};

export default NavBar;
