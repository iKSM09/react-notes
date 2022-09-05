import styled from "styled-components";

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const TaskText = styled.p`
  margin: 0 3px;
  padding: 0;
  flex-grow: 1;
  font-size: 16px;
  text-align: start;
  align-self: center;
  word-wrap: break-word;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "inherit")};
`;

export const EditableTaskInput = styled.input.attrs({ type: "text" })`
  margin: 0 3px;
  padding: 0;
  flex-grow: 1;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.outline};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.onPrimary};
  }
`;
