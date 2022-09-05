import styled from "styled-components";
import { MdDelete } from "react-icons/md";

export const NoteContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryContainer};
  color: ${({ theme }) => theme.onPrimaryContainer};
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  white-space: pre-wrap;

  .note-footer {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    small {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const DeleteIcon = styled(MdDelete).attrs({ size: "1.3em" })`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.tertiary};
  }
`;
