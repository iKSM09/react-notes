import { MdLightMode, MdDarkMode } from "react-icons/md";

import styled from "styled-components";

export const ThemeButtonContainer = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryContainer};
  color: ${({ theme }) => theme.onPrimaryContainer};
  border-radius: 50%;
`;

const ThemeButton = ({ handleToggleTheme, currentTheme }) => {
  return (
    <ThemeButtonContainer onClick={handleToggleTheme}>
      {currentTheme === "light" ? (
        <MdDarkMode size="1.5em" />
      ) : (
        <MdLightMode size="1.5em" />
      )}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;
