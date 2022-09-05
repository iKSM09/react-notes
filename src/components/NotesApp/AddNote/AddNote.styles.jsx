import styled from "styled-components";

export const AddNoteContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryContainer};
  color: ${({ theme }) => theme.onSecondaryContainer};
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    color: ${({ theme }) => theme.onSecondaryContainer};
    background-color: transparent;
    border: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.onSecondaryContainer};
    }

    &:focus {
      outline: none;
    }
  }

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .save {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.onSecondary};
      border: none;
      border-radius: 15px;
      padding: 5px 10px;

      &:hover {
        background-color: ${({ theme }) => theme.tertiary};
        color: ${({ theme }) => theme.onTertiary};
        cursor: pointer;
      }
    }
  }
`;
