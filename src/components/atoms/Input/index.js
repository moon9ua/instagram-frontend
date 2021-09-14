import React, { useState } from "react";
import styled from "styled-components";

/* return `
width: ${chosenTheme.width};
background-color: ${chosenTheme["background-color"]};
padding: ${chosenTheme.padding};
border: 1px solid ${chosenTheme["border-color"]};
`; */

const StyledInput = styled.input`
  ${({ theme, themeName }) => {
    const chosenTheme = theme[themeName];
    return Object.entries(chosenTheme)
      .map((val) => {
        const [key, value] = val;
        return `${key}: ${value};`;
      })
      .join("");
  }};

  border-radius: 3px;
  box-sizing: border-box;
`;

const Input = ({ placeholder, name, themeName = "inputForHome" }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      themeName={themeName}
    ></StyledInput>
  );
};

export default Input;
