import styled from "styled-components";

export const TaskInputContainer = styled.section`
  margin-inline: auto;
  margin-top: 12px;
  padding: 8px 11px 4px 4px;
  width: min(100%, 640px);
  border-radius: 0.5em;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.secondaryContainer};
  color: ${({ theme }) => theme.onSecondaryContainer};
`;

export const Input = styled.input.attrs({ type: "text" })`
  color: ${({ theme }) => theme.onSecondaryContainer};
  margin-left: 3px;
  flex-grow: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.onSecondaryContainer};
  }

  &:focus {
    outline: none;
  }
`;
