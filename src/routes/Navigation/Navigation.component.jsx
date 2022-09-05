import { Outlet } from "react-router-dom";

import { SearchBar, ThemeButton } from "../../components";
import {
  Header,
  Nav,
  LogoLink,
  Logo,
  LogoText,
  LinkWrapper,
  NavLink,
} from "./Navigation.styles";

import reactLogo from "../../assets/react.svg";

const Navigation = ({ handleToggleTheme, currentTheme }) => {
  return (
    <>
      <Header>
        <Nav>
          <LogoLink to="/">
            <Logo src={reactLogo} alt="React logo" />
            <LogoText>Notes</LogoText>
          </LogoLink>
          <SearchBar />
          <LinkWrapper>
            <NavLink to="/">Notes</NavLink>
            <NavLink to="todos">Todo</NavLink>
            <ThemeButton
              handleToggleTheme={handleToggleTheme}
              currentTheme={currentTheme}
            />
          </LinkWrapper>
        </Nav>
      </Header>

      <Outlet />
    </>
  );
};

export default Navigation;
