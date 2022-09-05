import styled from "styled-components";

const Button = styled.button`
  min-width: 64px;
  height: 32px;

  padding: 4px 12px;
  outline: none;
  border: none;
  border-radius: 0.5em;

  background-color: ${({ theme }) => theme.secondaryContainer};
  color: ${({ theme }) => theme.onSecondaryContainer};

  &:hover,
  &:focus,
  &:active,
  .active {
    background-color: ${({ theme }) => theme.tertiaryContainer};
    color: ${({ theme }) => theme.onTertiaryContainer};
  }
`;

export default Button;
