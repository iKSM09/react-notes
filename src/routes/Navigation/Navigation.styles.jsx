import { Link } from "react-router-dom";

import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.surface01};
  padding: 18px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media only screen and (max-width: 640px) {
    order: 1;
  }
`;

export const Logo = styled.img`
  width: 2em;
  height: 2em;
  margin: 4px;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const LogoText = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.primary};
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
`;

export const LinkWrapper = styled.span`
  display: flex;
  align-items: center;

  * {
    margin-inline: 0.3rem;
  }

  @media only screen and (max-width: 640px) {
    order: 2;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.onSurface};
  margin-inline: 0.5rem 0.8rem;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active,
  & .active {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
`;
