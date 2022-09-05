import styled from "styled-components";

export const DetailsWrapper = styled.div`
  margin: 4px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.p`
  margin: 0 3px;
  padding: 0;
  flex-grow: 1;
  font-size: 14px;
  text-align: start;
  word-wrap: break-word;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "gray" : "inherit")};
`;

export const EditableDetailsInput = styled.textarea.attrs({ cols: 40 })`
  margin: 0 3px;
  padding: 0;
  flex-grow: 1;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.outline};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;
