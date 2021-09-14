import React, { useState } from "react";
import styled from "styled-components";

// width: ${({ theme }) => theme.inputWidths.home};
// width: ${(props) => props.theme.inputWidths[props.size]};

/*
    return `
      width: ${props.theme.inputWidths[theme]};
      background-color: ${
        theme === "home" ? props.theme.colors.backgroundGray : props.theme.colors.white
      };
      `;
*/

const StyledInput = styled.input`
  ${({ themeName, theme }) => {
    const chosenTheme = theme[themeName];

    return `
          width: ${chosenTheme.width};
          background-color: ${chosenTheme["background-color"]};
          padding: ${chosenTheme.padding};
          border: 1px solid ${chosenTheme["border-color"]};
          `;
    /* border-color: ${chosenTheme["border-color"]}; */
    /* switch (themeName) {
      case "inputForHome":
        return `
          width: ${chosenTheme.width};
          background-color: ${chosenTheme["background-color"]};
          padding: ${chosenTheme.padding};
          border-color: ${chosenTheme["border-color"]};
        `;
      case "inputForSearch":
        return `
          width: ${chosenTheme.width};
          background-color: ${chosenTheme["background-color"]};
          padding: ${chosenTheme.padding};
          border-color: ${chosenTheme["border-color"]};
        `;
      default:
        return "";
    } */
  }};
  /* padding: 10px; */
  /* padding: 5px 0; */
  margin: 3px 0;
  /* border-color: #dbdbdb; */
  /* border: 1px solid; */
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
  // return <StyledInput placeholder={placeholder} name={name}></StyledInput>;
};

Input.defaultProps = {
  size: "home",
}; // 이게 되나?

export default Input;
